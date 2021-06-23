<?php
  $destinatario = 'maxi.prez@gmail.com'; //esto es al correo al que se enviará el mensaje
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];


  $header = 'Enviado desde mi portfolio';
  $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

  mail($destinatario, $mensaje, $header);
  echo "<script>alert('Correo enviado exitosamente')</script>";
  echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";
?>