function fishListener(){$("body").click(function(){makeAFish()})}function makeAFishRtoL(){$body=$("<div>").addClass("body"),$eye=$("<div>").addClass("eyeRtoL"),$tail=$("<div>").addClass("tailRtoL"),$fishContainer=$("<div>").addClass("fish-container right-to-left");var i=Math.floor(184*Math.random())-19;$fishContainer.css({top:i+"em"}),$body.append($eye),$fishContainer.append($body),$fishContainer.append($tail),$(".acquarium").append($fishContainer)}function makeAFishLtoR(){$body=$("<div>").addClass("body"),$eye=$("<div>").addClass("eyeLtoR"),$tail=$("<div>").addClass("tailLtoR"),$fishContainer=$("<div>").addClass("fish-container left-to-right");var i=Math.floor(184*Math.random())-19;$fishContainer.css({top:i+"em"}),$body.append($eye),$fishContainer.append($body),$fishContainer.append($tail),$(".acquarium").append($fishContainer)}function fishTimer(){window.setInterval(function(){console.log("fish"),makeAFishRtoL(),makeAFishLtoR()},500)}function batmanify(i,o,n){i.batmanify({imageSource:o,topOffset:n,link:"http://carrafa.github.io"})}function scrollListener(){$(window).scroll(function(){var i=$(window).scrollTop(),o=$(document).height(),n=$(window).height(),t=Math.floor(i)+n,e=o/t*10;$(".hook").css({bottom:e+"%"})})}console.log("hi, nosy person."),$(function(){scrollListener(),batmanify($(".profile-pic"),"../images/josh.png","-50%"),fishListener(),fishTimer()}),function(i){i.mark={jump:function(o){var n={selector:"a.scroll-on-page-link"};return"string"==typeof o&&(n.selector=o),o=i.extend(n,o),i(o.selector).click(function(o){var n=i(this),t=n.attr("href"),e=1e3,a=i(t).offset().top;i("html,body").animate({scrollTop:a-140},e,"swing"),o.preventDefault()})}}}(jQuery),jQuery(function(){jQuery.mark.jump()});