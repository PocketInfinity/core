<?php

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPAuth = true;

    $mail->Host = "smtp.gmail.com";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username = "christopherashe00@gmail.com";
    $mail->Password = "gcaz toch mvbe jndu";

    $mail->setFrom($email, $name);
    $mail->addAddress("christopherashe00@gmail.com", "Chris");

    $mail->Subject = "test subject";

    $mail->Body = "Name: $name\n" .
                  "Email: $email\n" .
                  "Message: $message";

    $mail->send();

    header("Location: sent.html");
} catch (Exception $e) {
    echo "Error sending email: " . $e->getMessage();
}