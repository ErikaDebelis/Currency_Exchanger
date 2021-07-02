import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './js/exchange.js';

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
async function makeApiCall(currency, dollarAmt) {
  try{
    const response = await Exchanger.getExchangeRate(currency);
    console.log("makeApiCall", response.conversion_rates);
    getElements(response.conversion_rates);
  }
  catch(err) {
    $('.showErrors').text(`There was an error`);
    console.log("await failed", err);
  }
}
//added try and catch to async to catch errors 
$(document).ready(function() {
  $('#currency-form').click(function() {
    const currency = $("#currency-parameter option:selected").val();
    let dollarAmt = $('#dollarAmount').val();
    Exchanger.getExchangeRate(currency, dollarAmt)
      .then(function(response) {
        getElements(response, dollarAmt);
        $(".showAmt").html(makeApiCall(dollarAmt));
        $(".showErrors").text(`ERROR`);
      });
  });
});