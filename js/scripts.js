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
var fishInterval = 0;
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
    end).attr('id', 'fish-' + fishInterval);

  var oceanDepth = $(document).height() - $('#tech').height();
  var topOffset = Math.floor(Math.random() * oceanDepth);
  var color = getColor();
  var animationFirst = {};
  animationFirst[start] = '20%';
  var animationSecond = {};
  animationSecond[start] = '50%';
  var animationThird = {};
  animationThird[start] = '80%';
  var animationFourth = {};
  animationFourth[start] = '200%';

  $body.css('background-color', color);
  $tail.css("border-" + start + "-color", color);
  $fishContainer.css({
    top: topOffset + "px"
  });
  $fishContainer.animate(animationFirst, 1000);
  $fishContainer.animate(animationSecond, 500, 'linear');
  $fishContainer.animate(animationThird, 500, 'linear');
  $fishContainer.animate(animationFourth, 1000);

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

function fishCatcher(topOffset) {
  hookDepth = Math.floor(hookDepth);
  if ((hookDepth < topOffset - 0) && (hookDepth > topOffset - 50)) {
    fishCounter++;
    return true;
  } else {
    return false;
  }

}

function fishTimer() {
  window.setInterval(function() {
    if (fishInterval % 2 === 0) {
      makeAFish('right', 'left');
    }
    if (fishInterval % 2 !== 0) {
      makeAFish('left', 'right');
    }
    if (fishInterval > 10) {

      fishId = fishInterval - 3;
      var $fish = $('#fish-' + fishId);
      var top = $fish.css('top');
      var color = $fish.find('.body').css('background-color');
      var topOffset = top.substring(0, top.length - 2);
      if (fishCatcher(topOffset)) {
        $fish.stop(true, true).animate({
          left: '10000px'
        }, 10);

        makeAFishCaught(color);
      }
      $('.acquarium').children().first().remove();
    }
    fishInterval++;
  }, 500);
}

// ------------- batmanify logo -------------

function batmanify(el, image, offset) {
  el.batmanify({
    imageSource: image,
    topOffset: offset,
    link: 'http://joshua.carrafa.com'
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

// ------------- email address --------------


$('#email').click(function(e) {
  this.href = this.href
    .replace(/joshua/, '')
    .replace(/samazingemailaddressat/, '@')
    .replace(/dot/, '.')
  console.log(this.href);
});

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
