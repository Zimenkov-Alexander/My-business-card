<?
if(isset($_POST['submit'])){
    $to = "dmelinevskiy@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = "This message is from ";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
}
    ?>