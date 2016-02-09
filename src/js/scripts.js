console.log('hi, nosy person.');

$(function() {
  hookListener();
  batmanify($('.profile-pic'), '../images/josh.png', '-50%');
  fishTimer();
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

function makeAFish(start, end) {
  $body = $('<div>').addClass('body');
  $eye = $('<div>').addClass('eye-' + start + "-to-" + end);
  $tail = $('<div>').addClass('tail-' + start + "-to-" + end);
  $fishContainer = $('<div>').addClass('fish-container ' + start + "-to-" +
    end);

  var oceanDepth = $(document).height() - $('#tech').height();
  var topOffset = Math.floor(Math.random() * oceanDepth);
  var color = getColor();

  $body.css('background-color', color);
  $tail.css("border-" + start + "-color", color);
  $fishContainer.css({
    top: topOffset + "px"
  });

  setTimeout(function() {
    fishCatcher($fishContainer, topOffset, color);
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
  $body.css('background-color', color);
  $tail.css("border-bottom", "1.5em solid " + color);

  $body.append($eye);
  $fishContainer.append($body);
  $fishContainer.append($tail);
  $('.hook').append($fishContainer);
  $('.fish-counter').text(fishCounter);
}

// ------------- fish timer -------------

function fishCatcher(fishContainer, topOffset, color) {
  hookDepth = Math.floor(hookDepth);
  if ((hookDepth < topOffset - 20) && (hookDepth > topOffset - 60)) {
    fishCounter++;
    makeAFishCaught(color);
    fishContainer.fadeOut(100);
  }
}

function fishTimer() {
  var fishDelay = 0;
  window.setInterval(function() {
    if (fishDelay > 10) {
      $('.acquarium').children().first().remove();
      $('.acquarium').children().first().remove();
    }
    makeAFish('right', 'left');
    makeAFish('left', 'right');
    fishDelay++;
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

function hookListener() {
  $(window).scroll(function() {
    var oceanDepth = $(document).height() - $('#tech').height();
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
