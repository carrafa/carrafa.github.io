function getColor(){return fishColors[Math.floor(Math.random()*fishColors.length)]}function makeAFish(o,e){$body=$("<div>").addClass("body"),$eye=$("<div>").addClass("eye-"+o+"-to-"+e),$tail=$("<div>").addClass("tail-"+o+"-to-"+e),$fishContainer=$("<div>").addClass("fish-container "+o+"-to-"+e);var t=$(document).height()-$("#tech").height(),i=Math.floor(Math.random()*t),a=getColor();$body.css("background-color",a),$tail.css("border-"+o+"-color",a),$fishContainer.css({top:i+"px"}),setTimeout(function(){fishCatcher($fishContainer,i,a)},1e3),$body.append($eye),$fishContainer.append($body),$fishContainer.append($tail),$(".acquarium").append($fishContainer)}function makeAFishCaught(o){$body=$("<div>").addClass("body"),$eye=$("<div>").addClass("eyeCaught"),$tail=$("<div>").addClass("tailCaught"),$fishContainer=$("<div>").addClass("fish-container fish-caught"),$body.css("background-color",o),$tail.css("border-bottom","1.5em solid "+o),$body.append($eye),$fishContainer.append($body),$fishContainer.append($tail),$(".hook").append($fishContainer),$(".fish-counter").text(fishCounter)}function fishCatcher(o,e,t){hookDepth=Math.floor(hookDepth),e-20>hookDepth&&hookDepth>e-60&&(fishCounter++,makeAFishCaught(t),o.fadeOut(100))}function fishTimer(){var o=0;window.setInterval(function(){o>10&&($(".acquarium").children().first().remove(),$(".acquarium").children().first().remove()),makeAFish("right","left"),makeAFish("left","right"),o++},500)}function batmanify(o,e,t){o.batmanify({imageSource:e,topOffset:t,link:"http://carrafa.github.io"})}function hookListener(){$(window).scroll(function(){var o=$(document).height()-$("#tech").height(),e=$(window).scrollTop()-1e3,t=$(document).height(),i=1.3*e/t,a=o*i;hookDepth=a,$(".hook").css({top:a+"px"})})}console.log("hi, nosy person."),$(function(){hookListener(),batmanify($(".profile-pic"),"../images/josh.png","-50%"),fishTimer()});var fishColors=["coral","aquamarine","violet","hotpink","crimson","palegoldenrod","lime","powderblue","gold","honeydew","lightseagreen","peachpuff","rebeccapurple","seagreen","orchid","tomato","seashell","salmon"],hookDepth=-100,fishCounter=0;!function(o){o.mark={jump:function(e){var t={selector:"a.scroll-on-page-link"};return"string"==typeof e&&(t.selector=e),e=o.extend(t,e),o(e.selector).click(function(e){var t=o(this),i=t.attr("href"),a=1e3,n=o(i).offset().top;o("html,body").animate({scrollTop:n-140},a,"swing"),e.preventDefault()})}}}(jQuery),jQuery(function(){jQuery.mark.jump()});