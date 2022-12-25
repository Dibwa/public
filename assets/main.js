/*SELECTORS*/
const approval = document.querySelector('#approval');

const but = document.querySelector('#verify');

const imput = document.getElementById('verify-input');

const modal = document.querySelector('.modal');

const modal_content = document.querySelector('.modal-content');

const initiate = document.querySelector('#initiate');

const payment = document.querySelector('.loading-container');




/*FUNCTIONS*/
function Bollen () {
    
    
    modal.style.display = 'block'
    modal_content.classList.add("modal-after")
        payment.style.visibility = 'hidden'
    
}

approval.addEventListener('click', function(){
    
    /*test
    if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(sucess)
}
else{
    console.log("nnaaa")
}

function sucess(position){
    
    console.log(position)
}
*/
    
    
    
    modal.style.display = 'none'
    modal_content.classList.remove("modal-after")
    
    
})




initiate.addEventListener('click', function(){


    const otp = document.getElementById('verify-input').value
    const url = `https://zatuwallet.com/api/v1/checkout/momo`
    const encoded = encodeURI(url)
 
  //FETCH REQUEST SENT   
     fetch(encoded, {
         method: 'POST',
         body: JSON.stringify({
             receiver:document.getElementById('receiver').innerText,
             sender: document.getElementById('sender').innerText,
             totalAmount: document.getElementById('total').innerText,
             orderId: document.getElementById('orderid').innerText,
             otp:otp
 
         }),headers:{
             "Content-Type":"application/json"
         }
     })
     .then(Response =>{ console.log(Response)
     })
     .catch((error) => {
    console.error('Error:', error);
     })
    
    
    payment.style.visibility = 'visible'
    
    setTimeout(Bollen, 7000);

  
  
    

    
    
    
})


but.addEventListener('click', function() {
    
    
   
   imput.style.display = 'block'
   but.style.display = 'none'
   initiate.style.display = 'block'

   //SMS SENDING
   const senderNumber= document.getElementById('sender').innerText
   const url = `https://zatuwallet.com/api/v1/sms`
   const encoded = encodeURI(url)

 //FETCH REQUEST SENT   
    fetch(encoded, {
        method: 'POST',
        body: JSON.stringify({
            receiver:document.getElementById('receiver').innerText,
            sender: document.getElementById('sender').innerText,
            totalAmount: document.getElementById('total').innerText,
            orderId: document.getElementById('orderid').innerText

        }),headers:{
            "Content-Type":"application/json"
        }
    })
    .then(Response =>{ console.log(Response)
        alert("OTP message sucessfully sent")
    })
    .catch((error) => {
        alert("Fatal error occured")
   console.error('Error:', error);
    })
   
   
       
});




/*ON LOAD*/

window.onload= function (){
    
    const urlDetails = window.location.search
  
    
    const urlParams = new URLSearchParams(urlDetails)
    
    
    const receiver = urlParams.get('rid')
    const sender = urlParams.get('sid')
    const totalAmount= urlParams.get('tam')
    const orderId = urlParams.get('orid')
    document.getElementById('receiver').innerHTML = receiver;
    document.getElementById('sender').innerHTML = sender;
    document.getElementById('total').innerHTML = totalAmount;
    document.getElementById('orderid').innerHTML = orderId;
   


async function UUID() {
 const url = 'https://zatuwallet.com/api/v1/uuid'
   const response = await fetch(url);
   const data = await response.json()
   document.getElementById('orderid').innerText = data.uuid;
   console.log(data.uuid)

   
}

UUID()

}