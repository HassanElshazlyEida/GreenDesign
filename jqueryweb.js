
$(window).bind('scroll', function () {
 
var navbar= $('.navbar');
if ($(window).scrollTop() >= $('.navbar').offset().top) {
navbar.addClass('fixed');
} else {
navbar.removeClass('fixed');
}
});
    

$(document).ready(function($) {

        $('#myCarousel2').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
   $('[id^=carousel-selector-]').click( function(){
      var id_selector = $(this).attr("id");
                var id = id_selector.substr(id_selector.length -1);
                var id = parseInt(id);
                $('#myCarousel2').carousel(id);
       
    });

});


$(".geer-check").click(function() {
  $(".color-option").fadeToggle();
});


$(".dropdown a").click(function() {
    $(".option-box").css('z-index','1');
    
});

$('.geer-check').click(function(){
   $('.color-option ul li').eq(0).css("backgroundColor","#5830dd");  
    $('.color-option ul li').eq(1).css("backgroundColor","#0aff9f"); 
    $('.color-option ul li').eq(2).css("backgroundColor","#eae12f"); 
    $('.color-option ul li').eq(3).css("backgroundColor","#e7346d");
    $('.color-option ul li').eq(4).css("backgroundColor","#c4ff08"); 
   });
 $('.color-option ul li').click(function(){
     $("link[href*='Theme']").attr('href',$(this).attr("data-value"));
 })