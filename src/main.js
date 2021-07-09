import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './js/exchange.js';

function getElements(response) {
  if (response.result) {
    $('#showRate').text(`response.conversion_result`);
  } else if (response["result"] === "error") {
    $('.showErrors').text(`There was an error: ${response.result}`); 
  } else {
    $('.showErrors').text(`There was an error: ${response["error-type"]}`);
  }
}
async function makeApiCall(currency, dollarAmt) {
  try {
    const response = await Exchanger.getExchangeRate(currency, dollarAmt);
    getElements(response);
  }
  catch (err) {
    $('.showErrors').text(`There was an error`);
  }
}
$('#currency-form').submit(function () {
  const currency = $("#currency option:selected").val();
  let dollarAmt = $('#dollarAmount').val();
  event.preventDefault();
  Exchanger.getExchangeRate(currency, dollarAmt)
    .then(function (response) {
      getElements(response);
      $(".showAmt").html(makeApiCall(dollarAmt));
      $(".showErrors").text(`ERROR`);
    });
});
