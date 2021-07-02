import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './js/exchange';

function getElements(response, dollarAmt) {
  if (response.result ==="error") {
    $('.showErrors').text(`There was an error: ${response}`);
  } else if (response.conversion_rates) {
    $('#showRate').text(`${response}: ${dollarAmt}`);
    console.log("getElements", response);  
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}
async function makeApiCall(choice) {
  try{
    const response = await Exchanger.getExchangeRate(choice);
    console.log("makeApiCall", response.conversion_rates);
    getElements(response.conversion_rates);
  }
  catch(err) {
    console.log("await failed", err);
  }
}
//added try and catch to async to catch errors 