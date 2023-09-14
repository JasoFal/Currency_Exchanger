export default class CurrencyExchangeObject {
  constructor(currencyExchangeRate, usdAmount) {
    this.currencyExchangeRate = currencyExchangeRate;
    this.amountInUSD = usdAmount;
    this.calculatedAmountInChosenCurrency = 0;
  }

  currencyExchangeCalculator() {
    this.calculatedAmountInChosenCurrency = this.amountInUSD * this.currencyExchangeRate;
  }
}