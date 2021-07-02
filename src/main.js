import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './js/exchange.js';

function getElements(response) {
  if (response["result"] ==="error") {
    $('.showErrors').text(`There was an error: ${response}`);
  } else if (response.result === "success") {
    $('#showRate').text(`parseInt(response["conversion_result"])`);
  } else {
    $('.showErrors').text(`There was an error: ${response["error-type"]}`);
  }
}
async function makeApiCall(dollarAmt) {
  try{
    const response = await Exchanger.getExchangeRate(dollarAmt);
    getElements(response["conversion_result"]);
  }
  catch(err) {
    $('.showErrors').text(`There was an error`);
  }
}
$(document).ready(function() {
  $('#currency-form').submit(function() {
    const currency = $("#currency option:selected").val();
    let usdAmt = $('#dollarAmount').val();
    event.preventDefault();
    Exchanger.getExchangeRate(currency, usdAmt)
      .then(function(response) {
        getElements(response, usdAmt);
        $(".showAmt").html(makeApiCall(usdAmt));
        $(".showErrors").text(`ERROR`);
      });
  });
});