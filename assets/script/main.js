const setup = () =>{
  const outputUser = document.querySelector('.outputUser');
  const btn = document.querySelector('button');
  
  

  const addItem = () =>{

    
  //GET ALL INPUT
    const nameUser = document.querySelector('#name');
    const dayOfBirth = document.querySelector('#birth-day');
    const monthOfBirth = document.querySelector('#birth-month');
    const yearOfBirth = document.querySelector('#birth-year');
    const sex = document.querySelector('input[type=radio]:checked');

  //ERRORS IF SOMETHING IS MISSING
    const errorName = document.querySelector('#nameError');
    const errorDate = document.querySelector('#dateError');
    const errorGender = document.querySelector('#genderError');

  //FILL OBJECT
    const person = {
      name: nameUser.value,
      day: dayOfBirth.value,
      month: monthOfBirth.value,
      year: yearOfBirth.value,
      gender: sex.value,
      age: function(){    //calculate the age
        const birthday = new Date(person.year, person.month, person.day);
        const now = new Date();
  
        let age = now.getFullYear() - birthday.getFullYear();
        const m = now.getMonth() - birthday.getMonth();
  
        if (m < 0 || (m === 0 && now.getDate() < birthday.getDate())) {
            age--;
        }
  
        return age;
      }
    }

    function deleteItem(){
      this.parentElement.remove();
    }

  //FUNCTION TO ADD DIV WITH PERSON DATA
    const addDiv = () =>{
      const new_div = document.createElement('div');
      const firstLine = document.createElement('p');
      const scndLine = document.createElement('p');
      const thirdLine = document.createElement('p');
      const deleteInput = document.createElement('span');

      firstLine.innerHTML = person.name;
      scndLine.innerHTML = ` ${person.day}/${person.month}/${person.year}`;
      thirdLine.innerHTML = `${person.age()} years old`;
      deleteInput.innerHTML = 'X';

      //ADD CLASSES AND STYLE
      if(person.gender == 'male'){
        new_div.setAttribute('class', 'male outputBox');
      }else if(person.gender == 'female'){
        new_div.setAttribute('class', 'female outputBox');
      }else{
        new_div.setAttribute('class', 'other outputBox');
      }

      //ADD DELETE FUNCTION TO X
      deleteInput.addEventListener('click', deleteItem);

      new_div.append(firstLine, scndLine, thirdLine, deleteInput);
      outputUser.append(new_div);
    }

    //CLEAR BOXES
    const resetBoxes = () =>{
      const defaultInput = document.querySelector('#default');
      nameUser.value = "";
      dayOfBirth.value = "--";
      monthOfBirth.value = "--";
      yearOfBirth.value = "--";
      defaultInput.checked = true;
    }

    //VALIDATE INPUT AND EXECUTE IF CORRECT
    const validateAndExecute = () => {
      let validName = true;
      let validDate = true;
      let validGender = true;

    //VALIDATE INPUT
      //VALIDATE USERS NAME
      if(person.name == ""){
        errorName.innerHTML = '*No valid name';
        validName = false;
      }else{
        errorName.innerHTML = '';
        validName = true;
      }
      
      //VALIDATE USERS DATE OF BIRTH
      if(person.day == "--" || person.month == "--" || person.year == "--"){
        errorDate.innerHTML = '*No valid date';
        validDate = false;
      }else{
        errorDate.innerHTML = '';
        validDate = true;
      }
      
      //VALIDATE USERS GENDER
      if(person.gender == 'default'){   //added default for validation
        errorGender.innerHTML = '*No valid gender';
        validGender = false;
      }else{
        errorGender.innerHTML = '';
        validGender = true;
      }

      //EXECUTE THE ADDING IF ALL IS CORRECT
      if(validName == true && validDate == true && validGender == true){
        addDiv();
        resetBoxes();
      }
    }  

  //CALL FUNCTIONS
    if(person.age() < 18){
      alert('Sorry, too young!!!');
      resetBoxes();
    }else{
      validateAndExecute();
    }
  }

  btn.addEventListener('click', addItem);
}

//EXECUTE WHEN WINDOW IS READY
window.addEventListener('load', setup);