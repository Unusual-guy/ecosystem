(function($) {

"use strict";






/*******************************  Isotope  *********************************/
$(window).load(function() {
	if ($('.grid .content').length) {
		
		// cache container
		var $container = $('.grid .content');
		
		// initialize isotope
		$container.isotope();

		// filter items when filter link is clicked
		$('.filters button').click(function(e){
			$('.filters button').removeClass('active');
			$(this).addClass('active');
			
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });
			return false;
		});
	}
}); //end windows load

$(document).ready(function() {


/***********************  Slider Revolution  ***************************/
if($('.banner').length) {
	$('.banner').revolution({
		startheight:550,
		startwidth:1170,
		
		onHoverStop: "on",
		hideThumbs:1,
		navigationType: "bullet",
		navigationArrows: "solo",
		navigationStyle: "round",
		shadow:0,

		soloArrowLeftHOffset: 0,
		soloArrowRightHOffset: 0,
	});    
}

/******************************  Submenus  *********************************/
	$('.submenu-toggle').click(function(e){
		$(this).parent().find('.submenu').slideToggle('fast');
		e.stopPropagation();
	});
	$('body').click(function() {
		$('.submenu').slideUp('fast');
	});

	$('.submenu').click(function(e){
		e.stopPropagation();
	});
	

	
/*******************************  GMaps  ***********************************/
	if ($('#map').length) {
		
		var map;
		map = new GMaps({
			div: '#map',
			lat: 41.8902624,
			lng: 12.4923096
		});

		map.addMarker({
			lat: 41.8902624,
			lng: 12.4923096,
			title: 'Contanct',
			infoWindow: {
				content: '15rd Avenue, New York,<br /> 156408, US<br /> <br /> Email: info@company.com <br /> Web: company.com'
			}
		});

	}

/**************************  go to top arrow  *****************************/
	$(window).scroll(function(){
		 if ($(this).scrollTop() > 100) {
			 $('#go-top').fadeIn();
		 } else {
			 $('#go-top').fadeOut();
		 }
	 }); 
 
	 $('#go-top').click(function(e){
		 $("html, body").animate({ scrollTop: 0 }, 600);
		 e.preventDefault();
	 });

/******************************  carousel  *********************************/

	$('.carousel').carousel({
		  interval: 3000
		});


	
/***************************  Nice scroll bar  *****************************/
	
	$("html").niceScroll({
		cursorcolor:"#91999b",
		cursorwidth:10, 
		boxzoom:true, 
		autohidemode:false,
		zindex:99999,
	});

	$(".product-list .content").niceScroll({
		cursorcolor:"#91999b",
		cursorwidth:10, 
		boxzoom:true, 
		autohidemode:false,
		zindex:99999,
	});

	$(".list-scroll").niceScroll({
		cursorcolor:"#91999b",
		cursorwidth:10, 
		boxzoom:true, 
		autohidemode:false,
		zindex:99999,
	});


	
/***************************** Menu Animation ******************************/


	$('.domain-toggle').click(function(e) {
		$('.domain-pricing').fadeToggle();
		e.preventDefault()
	});



}); //end document ready


})(jQuery);