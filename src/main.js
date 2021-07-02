import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './js/exchange';

function getElements(response) {
  if(response) {
    $('#showAmt').text(`${response}`);
    console.log("getElements", response);  
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}
