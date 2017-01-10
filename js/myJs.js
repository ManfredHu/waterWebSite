$(document).ready(function(){
    var $width = $(window).width();
    var result = parseInt($width/1920*760);
    $('.carousel').css({height: result + "px"});
    $('.carousel .item').css({height: result + "px"});
    $('.carousel-inner > .item > img').css({height: result + "px"});
});