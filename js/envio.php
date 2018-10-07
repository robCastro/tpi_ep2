<?php
// A continuación se capturan los datos especificados del formulario
$nombre=$_POST['nombre'];
$telefono=$_POST['telefono'];
$email=$_POST['email'];
$mensaje=$_POST['mensaje'];

// Debes indicar tu correo electrónico, eliminando el ejemplo
$to = "mi_pulgarcito@outlook.com";

// Puedes cambiar el asunto por defecto y que datos apareceran en el email que te llegue
$subject = "Entrada del Formulario de Contacto";
$message = " Nombre: " . $nombre . "\r\n Teléfono: " . $telefono . "\r\n Email: " . $email . "\r\n Mensaje: " . $mensaje;

// Puedes cambiar el nombre del remitente que aparecerá en tu bandeja de entrada, la página de sucesión y el mensaje que ve el usuario al final.
$from = "MiPulgarcito";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
if(@mail($to,$subject,$message,$headers))
{
 print "<script>document.location.href='https://rinconcito-del-pulgarcito.000webhostapp.com/contact.html';</script>";
 
// Created by Future Tutorials
}else{
 echo "Error! Please try again.";
}
?>