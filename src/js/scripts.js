console.log('hi, nosy person.');

$(function() {
  hookListener();
  batmanify($('.profile-pic'), '../images/josh.png', '-50%');
  fishTimer();
  startFishKiller();
});

// ------------- fish colors -------------

var fishColors = ['coral', 'aquamarine', 'violet', 'hotpink', 'crimson',
  'palegoldenrod', 'lime', 'powderblue', 'gold', 'honeydew', 'lightseagreen',
  'peachpuff', 'rebeccapurple', 'seagreen', 'orchid', 'tomato', 'seashell',
  'salmon'
];

var hookDepth = -100;
var fishCounter = 0;

function getColor() {
  return fishColors[Math.floor(Math.random() * fishColors.length)];
}

// ------------- fish makers -------------

function makeAFishRtoL() {
  $body = $('<div>').addClass('body');
  $eye = $('<div>').addClass('eyeRtoL');
  $tail = $('<div>').addClass('tailRtoL');
  $fishContainer = $('<div>').addClass('fish-container right-to-left');

  var oceanDepth = $(document).height() - $('#tech').height();
  var topOffset = Math.floor(Math.random() * oceanDepth);

  var color = getColor();

  $body.css({
    'background-color': color
  });


  $tail.css({
    "border-right": "1.5em solid " + color
  });

  $fishContainer.css({
    top: topOffset + "px"
  });

  setTimeout(function() {
    hookDepth = Math.floor(hookDepth);
    if ((hookDepth < topOffset - 20) && (hookDepth > topOffset - 60)) {
      $fishContainer.css('display', 'none');
      makeAFishCaught(color);
    }
  }, 1000);

  $body.append($eye);
  $fishContainer.append($body);
  $fishContainer.append($tail);
  $('.acquarium').append($fishContainer);
};

function makeAFishLtoR() {
  $body = $('<div>').addClass('body');
  $eye = $('<div>').addClass('eyeLtoR');
  $tail = $('<div>').addClass('tailLtoR');
  $fishContainer = $('<div>').addClass('fish-container left-to-right');

  var oceanDepth = $(document).height() - $('#tech').height()
  var topOffset = Math.floor(Math.random() * oceanDepth);


  var color = getColor();

  $body.css({
    'background-color': color
  });

  $tail.css({
    "border-left": "1.5em solid " + color
  });

  $fishContainer.css({
    top: topOffset + "px"
  });

  setTimeout(function() {
    hookDepth = Math.floor(hookDepth);
    if ((hookDepth < topOffset - 20) && (hookDepth > topOffset - 60)) {
      $fishContainer.remove();
      makeAFishCaught(color);
    } else {}
  }, 1000);

  $body.append($eye);
  $fishContainer.append($body);
  $fishContainer.append($tail);
  $('.acquarium').append($fishContainer);
}

function makeAFishCaught(color) {
  $body = $('<div>').addClass('body');
  $eye = $('<div>').addClass('eyeCaught');
  $tail = $('<div>').addClass('tailCaught');
  $fishContainer = $('<div>').addClass('fish-container fish-caught');

  $body.css({
    'background-color': color
  });

  $tail.css({
    "border-bottom": "1.5em solid " + color
  });

  $body.append($eye);
  $fishContainer.append($body);
  $fishContainer.append($tail);
  $('.hook').append($fishContainer);
  fishCounter++;
  $('.fish-counter').text(fishCounter);
};

// fish top range: -19em to 165em

// ------------- fish timers -------------

function fishTimer() {
  window.setInterval(function() {
    makeAFishRtoL();
    makeAFishLtoR();
  }, 500);
}

function startFishKiller() {
  window.setTimeout(function() {
    fishKiller();
  }, 5000);
}

function fishKiller() {
  window.setInterval(function() {
    $('.acquarium').children().first().remove();
  }, 250);
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

function hookListener() {
  $(window).scroll(function() {
    var oceanDepth = $(document).height() - $('#tech').height()
    var scrollTop = $(window).scrollTop() - 1000;
    var docHeight = $(document).height();
    var offsetPercentage = (scrollTop * 1.3) / docHeight;
    var topOffset = (oceanDepth * offsetPercentage);
    hookDepth = topOffset;

    $('.hook').css({
      top: topOffset + "px"
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
