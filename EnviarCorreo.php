<?
require("PHPMailer524/class.phpmailer.php");

$mail = new PHPMailer(true);
//extract($_POST);
$exito =  false;

$inputEmail = $_POST["inputEmail"];
$inputName = $_POST["inputName"];
$inputTelefono = $_POST["inputTelefono"];
$Comentario = $_POST["Comentario"];

if((isset($inputEmail)&&!empty($inputEmail))&&(isset($inputName)&&!empty($inputName))&&(isset($Comentario)&&!empty($Comentario)))
{
try {
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Host = "" // SMTP a utilizar. Por ej. smtp.elserver.com
$mail->Username = ""; // Correo completo a utilizar
$mail->Password = "Racing2001"; // Contraseña
$mail->Port = ; // Puerto a utilizar
$mail->From = ""; // Desde donde enviamos (Para mostrar)
$mail->FromName = $inputName.' , '.$inputEmail;
$mail->AddAddress("maxi.prez@gmail.com");  // Esta es la dirección a donde enviamos

//$mail->AddBCC("guilleluongo@gmail.com"); // Copia oculta
$mail->IsHTML(true); // El correo se envía como HTML
$mail->Subject = ''; // Este es el titulo del email.
//$body = $Mensaje;
$Mensaje = 'Nombre: '.$inputName.'| Email: '.$inputEmail.'| Telefono: '.$inputTelefono.'| Comentario: '.$Comentario;

$mail->Body = $Mensaje; // Mensaje a enviar
$mail->AltBody = $Mensaje; // Texto sin html

$exito = $mail->Send(); // Envía el correo.

echo "Message Sent OK\n";
} catch (phpmailerException $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
  echo $e->getMessage(); //Boring error messages from anything else!
}

if($exito){
 echo'<script type="text/javascript">
            alert("Informacion enviada con exito. \nEn breve un representante se pondrá en contacto. \n\nMuchas Gracias.");
            window.location="index.html"
         </script>';
}else{

echo'<script type="text/javascript">
            alert("Hubo un inconveniente, por favor intente enviar mail a: maxi.prez@gmail.com o cominiquese al 11-2648-8828. Muchas gracias.");
            window.location="index.html"
         </script>';
}

}
else {

echo'<script type="text/javascript">
            alert("Error en la validación de datos. Nombre, Correo y Comentario son obligatorios.");
            window.location="index.html"
         </script>';


}

?>