'use strict';

$('#number-chooser').submit(event => {
  event.preventDefault();
  const number = $('#number-choice').val();
  console.log(number);
  $('#number-choice').val('');
  $('.js-results').append(
    `<div class="fizz-buzz-item">
      <span>${number
      }</span>
    </div>`
  );
});





