<?php
  if (isset($_POST['submit'])) {
    if (empty($_POST['osduiegnpiouenv307h09uhvsoihu'])) {
      $firstName = $_POST['fname'];
      $lastName = $_POST['lname'];
      $email = $_POST['email'];
      $message = $_POST['message'];
      $formcontent = "Full Name: " . $firstName . " " . $lastName . "<br /><br />Email Address: <a href='mailto:" . $email . "'>" . $email . "</a><br /><br />Message:<br />" . $message;
      $recipient = "admin@growthallianceevv.com";
      $subject = 'Message from the GAGE Contact Form';
      $mailheader = "From: $email \r\n";
      $mailheader .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
      mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
      header('Location: https://www.growthallianceevv.com/thank-you');
    } else {
      header('Location: https://www.growthallianceevv.com/oops-something-went-wrong');
    }
  } else {
    header('Location: https://www.growthallianceevv.com/oops-something-went-wrong');
  }
?>
