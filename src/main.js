import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './js/exchange.js';

function getElements(response) {
  if (response["result"] ==="error") {
    console.log(response.result);
    $('.showErrors').text(`There was an error: ${response}`);
  } else if (response.result === "success") {
    $('#showRate').text(`${response["conversion_result"]}`);
    console.log(getElements);  
  } else {
    $('.showErrors').text(`There was an error: ${response["error-type"]}`);
  }
}
async function makeApiCall(dollarAmt) {
  try{
    const response = await Exchanger.getExchangeRate(dollarAmt);
    console.log(makeApiCall, response["conversion_result"]);
    getElements(response["conversion_result"]);
  }
  catch(err) {
    $('.showErrors').text(`There was an error`);
    console.log("await failed", err);
  }
}
//added try and catch to async to catch errors 
$(document).ready(function() {
  $('#currency-form').submit(function() {
    const currency = $("#currency-parameter option:selected").val();
    let dollarAmt = $('#dollarAmount').val();
    event.preventDefault();
    Exchanger.getExchangeRate(currency, dollarAmt)
      .then(function(response) {
        getElements(response, dollarAmt);
        $(".showAmt").html(makeApiCall(dollarAmt));
        $(".showErrors").text(`ERROR`);
      });
  });
});