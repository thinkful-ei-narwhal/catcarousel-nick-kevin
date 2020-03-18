'use strict';

$('.thumbnail').on('click', event => {
  const imgStr = $(event.currentTarget).attr('src');
  const imgStrAlt = $(event.currentTarget).attr('alt');

  $('.hero img').attr('src', imgStr);
  $('.hero img').attr('alt', imgStrAlt);
});
