export default class Exchanger {
  static async getExchangeRate(currency) {
    try {      
      const response = await fetch(`https://v6.exchangerate-api.com/v6/API_KEY=${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusTextError);
      }
      return response.json();
    } catch(error) {
      return error.message;     
    }
  }
}