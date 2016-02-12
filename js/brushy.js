console.log('you gotta brush yo teeth');


$(function() {
  makeTeeth(16);
  movePupil(event);
  moveEyebrows(event);
  checkTeeth();
  moveBrush();
});


function makeTooth(element) {
  $tooth = $('<div>').addClass('tooth');
  $(element).append($tooth);
  $tooth.on('mouseover', function() {
    brushTooth($(this));
  });
}

function makeTeeth(num) {
  for (i = 0; i < num; i++) {
    makeTooth($('.top-row'));
    makeTooth($('.bottom-row'));
  }
}

function brushTooth($tooth) {
  var n = 0;
  var val = $tooth.css('background-color');
  var color = val.split(", ")[1];
  var newColor = color + 1;
  $tooth.css('background-color',
    'rgb(' +
    newColor +
    ', ' +
    newColor +
    ',' +
    newColor +
    ')');
}

function logMousePos(e) {
  var height = $(document).height();
  var width = $(document).width();
  $(window).on('mousemove', function(e) {
    var y = Math.floor(e.pageY);
    var x = Math.floor(e.pageX);
    console.log("x:" +
      x + ", y:" + y + "");
  });
}

function movePupil(e) {
  $(window).on('mousemove', function(e) {
    var left = e.pageX / 10;
    var top = e.pageY / 5;

    if (left > 86) {
      left = 86;
    }
    if (left < 10) {
      left = 10;
    }
    if (top > 75) {
      top = 75;
    }
    if (top < 10) {
      top = 10;
    }

    $('.pupil').css({
      'left': left + '%',
      'top': top + '%'
    });
  });
}

function moveEyebrows(e) {
  $(window).on('mousemove', function(e) {

    var top = e.pageY / 8;
    if (top > 140) {
      top = 140;
    }
    if (top < -100) {
      top = -100;
    }
    $('.eyebrow').css({
      'top': top + '%'
    });
  });

}

function moveBrush() {
  $(window).on('mousemove', function(e) {
    var top = e.pageY;
    var left = e.pageX;
    $('.toothbrush-container').css({
      'top': top,
      'left': left - 40
    });
  });
}


function checkTeeth() {
  $(window).on('mousemove', function() {

    var teeths = [];
    $.each($('.tooth'), function() {
      var color = $(this).css('background-color').split(", ")[1];
      teeths.push(color);
    });
    if (avg(teeths) >= 255) {
      $('#status').text('ok. you\'re good to go.');
    }
  });
}

function avg(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    total += parseInt(arr[i]);
  }
  return total / arr.length;
}
