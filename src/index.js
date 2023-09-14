import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangerApi from './js/CurrencyExchangerApi';

async function getExchangeRates(currencyCode, amountInUSD) {
  const response = await CurrencyExchangerApi.newCurrencyExchangeApiCall(currencyCode, amountInUSD);
  if (response["result"] == "success") {
    printElements(response, currencyCode);
  } else {
    printError(response, currencyCode);
  }
}

function printError(error, currency) {
  document.querySelector("#show-response").innerText = `There was an error accessing the currency data for ${currency}:
  ${error}`;
}

function printElements(data) {
  document.querySelector("#show-response").innerText = `The ${data.base_code} to ${data.target_code} conversion is ${data.conversion_result} at a rate of ${data.conversion_rate}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currencyCode = document.querySelector("#type-of-currency").value;
  const amountInUSD = document.querySelector("#usd-amount").value;
  document.querySelector("#type-of-currency").value = null;
  document.querySelector("#usd-amount").value = null;
  getExchangeRates(currencyCode, amountInUSD);
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});