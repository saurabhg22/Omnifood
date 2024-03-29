$(document).ready(function () {
    
	/* -----------For Sticky Navigation----------- */
	$('.js--section-features').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass("sticky");
		}
		else{
			$('nav').removeClass("sticky");
		}
	},{
		offset: '60px'
	});
	
	
	/* -----------Scroll by clicking on buttons----------- */
	$('.js--scroll-to-plan').click(function(){
		$('html, body').animate({
			scrollTop: $('.js--section-plan').offset().top
		}, 1000);
	});
	
	$('.js--scroll-to-features').click(function(){
		$('html, body').animate({
			scrollTop: $('.js--section-features').offset().top
		}, 1000);
	});
	
	
	/* -----------Navigation Scroll----------- */
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
	
	
	/* -----------Animations----------- */
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass("animated fadeIn");
	},{
		offset: '60%'
	});
	
	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass("animated fadeInUp");
	},{
		offset: '60%'
	});
	
	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass("animated fadeIn");
	},{
		offset: '60%'
	});
	
	$('.js--wp-4').waypoint(function(direction){
		$('.js--wp-4').addClass("animated pulse");
	},{
		offset: '60%'
	});
	
	
	/* Mobile Nav */
	$('.js--nav-icon').click(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
		nav.slideToggle(200);
		if(icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		}
		else{
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');	
		}	
	});
	
	
	/* Maps */
	var lng;
	var form_box = $(".form-box");
	if (form_box.width() == form_box.parent().width()){
		var lng = 77.1633213;
	}
	else{
		var lng = 77.175;
	}
	
	var map = new GMaps({
	  div: '.map',
	  lat: 28.6749308,
	  lng: lng
	});
	
	map.addMarker({
	  lat: 28.6749308,
	  lng: 77.1633213,
	  title: 'Delhi',
	  infoWindow: {
		  content: '<p>This is our HQ.</p>'
		}
	});
	
});










