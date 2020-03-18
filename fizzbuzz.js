'use strict';

$('#number-chooser').submit(event => {
  event.preventDefault();
  $('.js-results').empty();
  const number = $('#number-choice').val();
  $('#number-choice').val('');

  for (let i = 1; i <= number; i++) {
    let returnValue = fizzbuzzReplace(i);
    $('.js-results').append(
      `<div class="fizz-buzz-item">
        <span>${returnValue}</span>
      </div>`);
    fizzbuzzClassAdd(returnValue);
  }
});


function fizzbuzzReplace(currentNum) {
  let word = '';
  if (currentNum % 5 === 0 && currentNum % 3 === 0) {
    word = 'fizzbuzz';
    return word;
  }
  if (currentNum % 3 === 0) {
    word = 'fizz';
    return word;
  }
  if (currentNum % 5 === 0) {
    word = 'buzz';
    return word;
  }
  return currentNum;
}

function fizzbuzzClassAdd(returnValue) {
  if (returnValue === 'fizzbuzz') {
    $('.js-results .fizz-buzz-item').last().addClass('fizzbuzz');
  }
  if (returnValue === 'fizz') {
    $('.js-results .fizz-buzz-item').last().addClass('fizz');
  }
  if (returnValue === 'buzz') {
    $('.js-results .fizz-buzz-item').last().addClass('buzz');
  }
}