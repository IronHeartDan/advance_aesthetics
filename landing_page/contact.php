<?php
if (empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["phone"]) || empty($_POST["location"])) {
    echo "<script type='text/javascript'>alert('An Error Occured');</script>";
    echo "<script type='text/javascript'>
    history.back();
    </script>";
} else {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $location = $_POST['location'];

    $msg = "$name wants to connect. Email Provided : $email, Phone provided : $phone, Location :$location";
    echo $msg;
    mail("danishkhan.dk2.dk16@gmail.com", "Advance Aesthetics Enquiry Message", $msg);
    echo "<script type='text/javascript'>alert('Your message sent successfully');</script>";
    echo "<script type='text/javascript'>
    window.location.replace('thank_you.html');
    </script>";
}
