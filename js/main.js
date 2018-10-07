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


// $('.next-button').click(function() {
//     if($(this).parent().hasClass('specific-step')){
//          performSpecificStep();
//     }
//     else{
//         // Do standard stuff
//     }
// });