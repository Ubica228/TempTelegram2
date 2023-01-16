let tg = window.Telegram.WebApp;
tg.expand();
send_btn = document.getElementById('send-button');
send_btn.addEventListener('click',function(){
   cmnd = 'send_phone' ;
   document.body.style.backgroundColor = 'red';
   tg.sendData(cmnd);
});