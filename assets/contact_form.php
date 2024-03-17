<?php
//THIS IS A TEST
$to = 'pando.systems.uk@gmail.com';
$subject = 'Test email from server';
$message = 'This is a test email.';
$headers = 'From: myemail@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $message, $headers)) {
    echo "Sent successfully.";
} else {
    echo "Failed to send.";
}
?>
