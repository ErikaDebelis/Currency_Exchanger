export default class Exchanger {
  static async getExchangeRate(currency, dollarAmt) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${dollarAmt}`);
      if (!response.ok) {
        throw Error(response.result);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}