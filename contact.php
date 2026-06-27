<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

// DB connect
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
/ Save into DB
$sql = "INSERT INTO contact_form (name, email, subject, message) 
        VALUES ('$name', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
  // WhatsApp Redirect
  $phone = "923115907108"; // your WhatsApp no
  $url = "https://wa.me/$phone?text="
        ."New Contact Form Submission%0a"
        ."Name: $name%0a"
        ."Email: $email%0a"
        ."Subject: $subject%0a"
        ."Message: $message";

  header("Location: $url");
  exit;
} else {echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>