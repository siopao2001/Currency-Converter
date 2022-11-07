 
const form = document.getElementById('form');

  const requestOptions = {
   method: 'GET',
   redirect: 'follow',
   headers: {
   'apikey': 'T4qKjfwUso1InAqMiX9pBI3H7x9clfxT'
   }
  };

  function logSubmit(event) {
   let to  = document.getElementById("to-value").value;
   let from = document.getElementById("from-value").value;
   let amount = document.getElementById("amount-value").value;
 
   fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
   .then(response => response.json())
   .then(object => document.getElementById("converted").innerText = object.result)
   .catch(error => console.log('error', error));

   event.preventDefault();
 }
 
 form.addEventListener('submit', logSubmit);
 document.addEventListener('DOMContentLoaded', () => {
   const selectDropFrom = document.querySelector('#from-value');
   const selectDropTo = document.querySelector('#to-value');

  fetch("https://api.apilayer.com/currency_data/list", requestOptions)
  .then(response => response.json())
  .then(result => {
     let output = "";
     for (const currency in result.currencies) {
       output += `<option value="${currency}">${currency}</option>`;
       selectDropFrom.innerHTML = output;
       selectDropTo.innerHTML = output;
    }
   })
  .catch(error => console.log('error', error));

 })

