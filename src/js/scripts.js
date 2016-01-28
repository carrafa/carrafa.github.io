console.log('hi, nosy person.');

$(function() {
  scrollListener();
  batmanify($('.profile-pic'), '../images/josh.png', '-50%');
  fishListener();
});

function fishListener() {
  $('body').click(function() {
    makeAFish();
  });
}

function makeAFish() {
  $body = $('<div>').addClass('body');
  $eye = $('<div>').addClass('eye');
  $tail = $('<div>').addClass('tail');
  $fishContainer = $('<div>').addClass('fish-container');

  var topOffset = Math.floor(Math.random() * 184) - 19;

  $fishContainer.css({
    top: topOffset + "em"
  });
  $body.append($eye);
  $fishContainer.append($body);
  $fishContainer.append($tail);

  $('.acquarium').append($fishContainer);

}

// fish top range: -19em to 165em

function batmanify(el, image, offset) {
  el.batmanify({
    imageSource: image,
    topOffset: offset,
    link: 'http://carrafa.github.io'
  });
}



function scrollListener() {
  $('window').scroll(function() {
    console.log('meow');
  });
}

// ------------- bandcamp listeners --------------
