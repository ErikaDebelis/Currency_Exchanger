export default class Exchanger {
  static getExchangeRate(currency, dollarAmt) {
    return fetch(`https://v6.exchangerate-api.com/v6/API_KEY=${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}