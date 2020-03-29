<?php

    if (isset($_POST['enviar'])) {
        
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $mensagem = $_POST['mensagem'];
        
        $headers = "MIME-Version: 1.1\r\n";
        $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
        $headers .= "From: j.carlosdelima@jmlima.com\r\n";
        $headers .= "Return-Path: j.carlosdelima@jmlima.com\r\n";

        $envio = mail($email, "Email do site", nl2br($mensagem), $headers);

        $msg = '';
        if($envio){
            $msg = '<p class="alert alert-success">
                        <span>Olá <strong>'.$nome.'</strong>, sua mensagem foi enviada, retornmos em breve. Obrigado.</span>
                    </p>';
        } else { 
            $msg = '<p class="alert alert-danger">
                        <span>Olá <strong>'.$nome.'</strong>, deu alguma falha ao enviar, por favor tente novamente.</span>
                    </p>'; 
        } 
?>        
        <script>
            setTimeout(function() {
                $('.alert').fadeOut('fast');
            }, 5000);
        </script>

<?php } ?>