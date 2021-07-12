import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './js/exchange.js';

function clearFields() {
  $(".showAmt").html('');
  $('.showErrors').text('');
}

function getElements(response) {
  if (response["result"] === "success") {
    const rate = response.conversion_result.toFixed(2);
    $('.showAmt').text(`${rate} ${response.target_code}`);
  } else if (response["result"] === "error") {
    $('.showErrors').text(`There was an error: ${response["error-type"]}`); 
    if ( response["error-type"] === "unsupported-code") {
      $('.showErrors').text(`There was an error: Currency in question does not exist`);
    }
  } else {
    $('.showErrors').text(`There was an error: Invalid Input`);
  }
}

$('#currency-form').submit(function () {
  const currency = $("#currency option:selected").val();
  let dollarAmt = $('#dollarAmt').val();
  event.preventDefault();
  Exchanger.getExchangeRate(currency, dollarAmt)
    .then(function (response) {
      getElements(response);
    });
  clearFields();
});