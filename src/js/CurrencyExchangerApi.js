export default class CurrencyExchangerApi {
  static async newCurrencyExchangeApiCall(currencyCode, baseCurrencyAmount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currencyCode}/${baseCurrencyAmount}`);
      const jsonifiedNewCurrencyExchangeResponse = await response.json();
      if (!response.ok) {
        if (jsonifiedNewCurrencyExchangeResponse.result === "error") {
          const inputFailErrorMessage = `${jsonifiedNewCurrencyExchangeResponse.result} ${jsonifiedNewCurrencyExchangeResponse["error-type"]}`;
          throw new Error(inputFailErrorMessage);
        } else {
          const apiFailErrorMessage = `${response.status} ${response.statusText}`;
          throw new Error(apiFailErrorMessage);
        }
      }
      return jsonifiedNewCurrencyExchangeResponse;
    } catch(error) {
      return error;
    }
  }
}