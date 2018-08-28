<?php
/**
 * Created by PhpStorm.
 * User: Руслан
 * Date: 28.08.2018
 * Time: 11:27
 */
$to = 'evgakul@list.ru';
$subject = "Заказ с сайта mado-style.ru";
$subject_to_client = "Благодарим за заказ с сайта mado-style.ru!";
$headers = "From: ".$to."\r\n".
           "MIME-Version: 1.0" . "\r\n" .
           "Content-type: text/html; charset=UTF-8" . "\r\n";
$message ="<html>
		<head>
		  <title>Заказ с сайта Ворот</title>
		</head>
		<body>";
$message .= "<div><b>Заказ с сайта ворот</b></div>"
			."<div>Имя: ".$_POST['name']."</div>"
			."<div>Номер: ".$_POST['tel']."</div>";

$message .="</body></html>";

mail($to, $subject, $message, $headers);
echo '<pre>';
print_r($message);
echo '</pre><br>';