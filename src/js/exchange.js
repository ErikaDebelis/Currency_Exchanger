export default class Exchanger {
  static async getExchangeRate(dollarAmt, currency) {
    try {      
      const response = await fetch(`https://v6.exchangerate-api.com/v6/42043223edc19acc44563978/pair/USD/${currency}/${dollarAmt}`);
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusTextError);
      }
      return response.json();
    } catch(error) {
      return error.message;     
    }
  }
}