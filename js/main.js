//button
	$('.top-nav_btn').on('click', function(e) {
  e.preventDefault;
  if($(this).hasClass('top-nav_btn_active')){
  	$('.top-nav-btn-overlay').animate({top:'-100%'},'slow');
  	$('.top-nav_btn').toggleClass('top-nav_btn_active');
  }
  else {
  $(this).toggleClass('top-nav_btn_active');
  $('.top-nav-btn-overlay').toggleClass('top-nav-btn-overlay-active');
  $('.top-nav-btn-overlay').animate({top:'0'},'slow');
 }
});
// прелоадер
// (function($){
//   'use strict';
//     $(window).on('load', function () {
//         if ($(".pre-loader").length > 0)
//         {
//             $(".pre-loader").fadeOut("slow");
//         }
//     });
// });
$(function(){
  $(window).on("load", function(){
     $('#loading').fadeOut('slow', function() {
     	$(this).remove();
     });
  });
});


// social links animation
	$('.overlay-social-main').hover(function(e) {
		e.preventDefault;
		$('.top-nav-btn-overlay-heart').toggleClass('overlay-social-notactive');
		$('.overlay-social').toggleClass('overlay-social-active');
		$('#overlay-fb').filter(':not(:animated)').animate({left:'0px'},'slow');
		$('#overlay-tg').filter(':not(:animated)').animate({left:'25px'},'slow');
		$('#overlay-vk').filter(':not(:animated)').animate({left:'50px'},'slow');
		$('#overlay-tw').filter(':not(:animated)').animate({left:'75px'},'slow');
	});

// $('.next-button').click(function() {
//     if($(this).parent().hasClass('specific-step')){
//          performSpecificStep();
//     }
//     else{
//         // Do standard stuff
//     }
// });