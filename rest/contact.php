<?php
// Get the contact information from the form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
// Create the email body
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Message: $message\n";
// Send the email
mail('unityofegrimelve@gmail.com', 'New Contact Form Submission', $body);
// Redirect the user to a thank-you page
header('Location: ./index.html');
?>