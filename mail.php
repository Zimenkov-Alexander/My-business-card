
	<?php
$to = "zimenkov@zimenkov.site";
$subject = "My Business card";
$body = "TEST";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: You <ZimenkovIUAI@gmail.com>\r\n";

if(mail($to,$subject,$body,$headers)) {
echo "MAIL - OK";
} else {
echo "MAIL FAILED";
}
?>