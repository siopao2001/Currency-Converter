 //import fetch from "node-fetch"
// import * as dotenv from 'dotenv'
//dotenv.config()
//var myHeaders = new fetch.Headers();
//myHeaders.append("apikey", `T4qKjfwUso1InAqMiX9pBI3H7x9clfxT`);

const form = document.getElementById('form');

let variables = {
   to: document.getElementById("to-value").value,
   from: document.getElementById("from-value").value,
   amount: document.getElementById("amount-value").value
};

const {to, from, amount} = variables;

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {
   'apikey': `${process.env.API_LAYER_KEY}`
 }
};

function logSubmit(event) {
  fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  event.preventDefault();
}
form.addEventListener('submit', logSubmit);
// fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

