import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Haiku } from './haiku';



$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
  });
});
