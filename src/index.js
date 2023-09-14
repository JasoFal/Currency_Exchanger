import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangerApi from './js/CurrencyExchangerApi';

async function getExchangeRates(currencyCode, amountInUSD) {
  const response = await CurrencyExchangerApi.newCurrencyExchangeApiCall(currencyCode, amountInUSD);
  if (response["result"] == "success") {
    console.log(currencyCode);
    console.log(response);
    printElements(response, currencyCode);
  } else {
    printError(response, currencyCode);
  }
}

function printError(error, currency) {
  document.querySelector("#show-response").innerText = `There was an error accessing the currency data for ${currency}:
  ${error}`
}

function printElements(data) {
  document.querySelector('#showResponse').innerText = `The USD to ${data[1]} conversion is ${data[0].conversion_result}.`
}