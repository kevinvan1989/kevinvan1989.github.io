<?php
    $nameTo = $_POST['to'];
    $nameFrom = $_POST['from'];
    $opportunity = $_POST['opportunity'];
    $date = $_POST['date'];

    $fullNameContact = $_POST['fullName'];
    $telephone = $_POST['tel'];
    $email = $_POST['email'];
    $extraRemarks = $_POST['remark'];

    $mailTo = 'kevin.v1989@gmail.com';
    $subject = 'Nieuwe aanvraag voor cadeaubon';
    $headers = "From: ".$email;
    $txt = "You have received an email form ".$fullNameContact.".\n\n"
    ."Bon opmaken voor: ".$nameTo.".\n"
    ."Van wie is de cadeaubon?: ".$nameFrom.".\n"
    ."Voor welke gelegenheid?: ".$opportunity.".\n"
    ."Datum van afgifte: ".$date.".\n\n"

    ."Gegevens van de aanvrager: ".".\n"
    ."Volledige naam: ".$fullNameContact.".\n"
    ."Telefoonnummer: ".$telephone.".\n"
    ."Email: ".$email.".\n"
    ."Extra opmerkingen: ".$extraRemarks;

    mail($mailTo, $subject, $txt, $headers);
    // header(Location('index.html'));
?>