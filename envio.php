<?php
// A continuación se capturan los datos especificados del formulario
$nombre=$_POST['nombre'];
$email=$_POST['email'];
$mensaje=$_POST['mensaje'];

// Debes indicar tu correo electrónico, eliminando el ejemplo
$to = "mipulgarcitoelsalvador4@gmail.com";

// Puedes cambiar el asunto por defecto y que datos apareceran en el email que te llegue
$subject = "Entrada del Formulario de Contacto";
$message = " Nombre: " . $nombre . "\r\n Email: " . $email . "\r\n Mensaje: " . $mensaje;

// Puedes cambiar el nombre del remitente que aparecerá en tu bandeja de entrada, la página de sucesión y el mensaje que ve el usuario al final.
$from = "MiPulgarcito";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
if(@mail($to,$subject,$message,$headers))
{
 print "<script>document.location.href='https://rinconcito-del-pulgarcito.000webhostapp.com/contact.html';</script>";
 
}else{
 echo "Error! Por favor prueba de nuevo.";
}
?>