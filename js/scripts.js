console.log('hi, nosy person.');

$(function() {
  scrollListener();
  batmanify($('.profile-pic'), '../images/josh.png', '-50%');
});


function makeAFish(el) {
  $body = $('<div>').addClass('body');
  $eye = $('<div>').addClass('eye');
  $tail = $('<div>').addClass('tail');
  $fishContainer = $('<div>').addClass('fish-container');

  $body.append($eye);
  $fishContainer.append($body);
  $fishContainer.append($tail);

  el.append($fishContainer);
}

function batmanify(el, image, offset) {
  el.batmanify({
    imageSource: image,
    topOffset: offset
  });
}



function scrollListener() {
  $('window').scroll(function() {
    console.log('meow');
  });
}
