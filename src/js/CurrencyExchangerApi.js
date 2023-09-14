export default class CurrencyExchangerApi {
  static async newCurrencyExchangeApiCall(currencyCode, baseCurrencyAmount) {
    try {
      const response = await fetch(`GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/USD/${currencyCode}/${baseCurrencyAmount}
      `);
      const jsonifiedNewCurrencyExchangeResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
      return jsonifiedNewCurrencyExchangeResponse;
    } catch(error) {
      return error;
    }
  }
}