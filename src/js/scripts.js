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

// ------------- scroll thing --------------

(function(jQuery) {
  jQuery.mark = {
    jump: function(options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function(e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset - 140
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);


jQuery(function() {
  jQuery.mark.jump();
});
