$(document).ready(function(){
    autoSetBanner();
});

$(window).resize(function(){
    autoSetBanner();
});

function autoSetBanner(){
    var $width = $(window).width();
    var result = parseInt($width/1920*760);
    $('.carousel').css({height: result + "px"});
    $('.carousel .item').css({height: result + "px"});
    $('.carousel-inner > .item > img').css({height: result + "px"});
}

// var firstL = 0;
// if($('.aboutMain').length > 0){
//     firstL = $('h2').eq(0).offset().top;
// }
// $(window).scroll(function(){
//     if($('.aboutMain').length > 0){
//         var sLen = $(document).scrollTop();
//         if(sLen > firstL){
//             $('#sidebar').css({
//                 position: 'static'
//             });
//             $('.aboutMain').addClass('col-md-offset-3');
//         }else{
//             $('#sidebar').css({
//                 position: 'fixed',
//                 top: '10px'
//             });
//             $('.aboutMain').removeCss('col-md-offset-3');
//         }
//     }
// });
