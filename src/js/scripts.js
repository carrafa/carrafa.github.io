console.log('hi, nosy person.');

$(function() {
  scrollListener();
  batmanify($('.profile-pic'), '../images/josh.png', '-50%');
  fishTimer();
});

// ------------- fish colors -------------

var fishColors = ['coral', 'aquamarine', 'violet', 'hotpink', 'crimson',
  'palegoldenrod', 'lime', 'powderblue', 'gold', 'honeydew', 'lightseagreen',
  'peachpuff', 'rebeccapurple', 'seagreen', 'orchid', 'tomato', 'seashell',
  'salmon'
];

function getColor() {
  return fishColors[Math.floor(Math.random() * fishColors.length)];
}

// ------------- fish makers -------------

function makeAFishRtoL() {
  $body = $('<div>').addClass('body');
  $eye = $('<div>').addClass('eyeRtoL');
  $tail = $('<div>').addClass('tailRtoL');
  $fishContainer = $('<div>').addClass('fish-container right-to-left');

  var topOffset = Math.floor(Math.random() * 184) - 19;

  var color = getColor();

  $body.css({
    'background-color': color
  });

  $tail.css({
    "border-right": "1.5em solid " + color
  });

  $fishContainer.css({
    top: topOffset + "em"
  });

  $body.append($eye);
  $fishContainer.append($body);
  $fishContainer.append($tail);
  $('.acquarium').append($fishContainer);
}

function makeAFishLtoR() {
  $body = $('<div>').addClass('body');
  $eye = $('<div>').addClass('eyeLtoR');
  $tail = $('<div>').addClass('tailLtoR');
  $fishContainer = $('<div>').addClass('fish-container left-to-right');

  var topOffset = Math.floor(Math.random() * 184) - 19;

  var color = getColor();

  $body.css({
    'background-color': color
  });

  $tail.css({
    "border-left": "1.5em solid " + color
  });

  $fishContainer.css({
    top: topOffset + "em"
  });

  $body.append($eye);
  $fishContainer.append($body);
  $fishContainer.append($tail);
  $('.acquarium').append($fishContainer);
}

// fish top range: -19em to 165em

// ------------- fish timer -------------

function fishTimer() {
  window.setInterval(function() {
    console.log('fish');
    makeAFishRtoL();
    makeAFishLtoR();
  }, 500);
}



// ------------- batmanify logo -------------

function batmanify(el, image, offset) {
  el.batmanify({
    imageSource: image,
    topOffset: offset,
    link: 'http://carrafa.github.io'
  });
}


// ------------- fish hook thing -------------

function scrollListener() {
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var height = Math.floor(scrollTop) + windowHeight;
    var bottom = (docHeight / height * 10);
    $('.hook').css({
      bottom: bottom + "%"
    });
  });
}


// ------------- scroll nav thing --------------

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
