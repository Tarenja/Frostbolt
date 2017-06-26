$(document).ready(function() {

	// everything below here is for the homepage

	$('#gamesSection span').css('opacity', '0.2');

 		$('#img1').hover(function() {
			$('#Fallout').animate({opacity: '1'});	
		});

  		$('#img1').mouseleave(function () {
  			$('#Fallout').stop().animate({opacity: '0.2'});
  		});
	  	
 		$('#img2').hover(function() {
 			$('#Dishonored').animate({opacity: '1'});
 		});
	 	
  		$('#img2').mouseleave(function () {
  			$('#Dishonored').stop().animate({opacity: '0.2'});
  		});
	 	
 		$('#img3').hover(function() {
 			$('#DragonAge2').animate({opacity: '1'});
 		});
	 	
  		$('#img3').mouseleave(function () {
  			$('#DragonAge2').stop().animate({opacity: '0.2'});
  		});
 		  	
 		$('#img4').hover(function() {
 			$('#MassEffect').animate({opacity: '1'});
 		});
 	
  		$('#img4').mouseleave(function () {
  			$('#MassEffect').stop().animate({opacity: '0.2'});
  		});
 	  	
 		$('#img5').hover(function() {
 			$('#Skyrim').animate({opacity: '1'});
 		});
 	 	
  		$('#img5').mouseleave(function () {
  			$('#Skyrim').stop().animate({opacity: '0.2'});
  		});
 	 	  	
 		$('#img6').hover(function() {
 			$('#DragonAge').animate({opacity: '1'});
 		});

  		$('#img6').mouseleave(function () {
  			$('#DragonAge').stop().animate({opacity: '0.2'});
  		});
 	

});