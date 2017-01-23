$(document).ready(function(){
    autoSetBanner();
    //fixNavBar();
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
//     fixNavBar();
// });

// function fixNavBar(){
//     if($('.aboutMain').length > 0){
//         var sLen = $(document).scrollTop();
//         if(sLen < firstL){
//             console.log('静态');
//         }else{
//             console.log('固定');
            
//         }
//     }
// }

