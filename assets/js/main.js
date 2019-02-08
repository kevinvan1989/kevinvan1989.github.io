function initMap() {
  var myLatLng = {lat: 51.260197, lng: 4.402771};

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById('googleMap'), {
    center: myLatLng,
    zoom: 10
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
}