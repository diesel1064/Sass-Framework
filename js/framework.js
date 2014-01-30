//
// Framework v1.0.0 (https://github.com/diesel1064/Sass-Framework)
// Copyright 2014 Dave Evans Design
// Licensed under http://www.apache.org/licenses/LICENSE-2.0
//
 $(document).ready(function(){

 	// NAVIGATION SCRIPT
 	$nav = $('.main-nav');
 	$parent = $('.parent');
 	$carrot = $('.carrot-wrap');
 	$child = $('.child');
 	$window_size = $(window).width();

 	if($window_size >= 768) {
	 	$nav.addClass('lg').removeClass('sm').css('display','block').css('height','40px');
		$parent.removeClass('closed').removeClass('open').children('ul').slideUp();
		$('.menu-button').removeClass('open');
		$('nav').removeClass('overflow');
	}
	$(window).resize(function(){
		$window_size = $(window).width();
		if($window_size >= 768) {
		 	$nav.addClass('lg').removeClass('sm').css('display','block').css('height','40px');
			$parent.removeClass('closed').removeClass('open').children('ul').slideUp();
			$carrot.removeClass('hide');
			$('.menu-button').removeClass('open');
			$('nav').removeClass('overflow');
		}
	});
	if($window_size < 768) {
		$nav.addClass('sm').removeClass('lg').css('display','none').css('height','auto');
		$('nav').addClass('overflow');
		$parent.addClass('closed');
		$('.menu-button').click(function(){
	 		if($(this).hasClass('open')) {
	 			$(this).removeClass('open');
	 			$nav.stop().slideToggle(200);
	 			$parent.removeClass('open').addClass('closed').children('ul').slideUp();
	 			$carrot.removeClass('hide');
	 		} else {
	 			$(this).addClass('open');
	 			$nav.stop().slideToggle(200);
	 		}
	 	});
		$carrot.click(function(){
			if($(this).parent('li').hasClass('closed')) {
				$(this).addClass('hide');
				$(this).parent('li')
					.removeClass('closed')
						.addClass('open')
							.children('ul')
								.slideDown(200);
			}
		});
	}
	$(window).resize(function(){
	 	$window_size = $(window).width();
 		if($window_size < 768) {
			$nav.addClass('sm').removeClass('lg').css('display','none').css('height','40px');
			$parent.addClass('closed');
			$('nav').addClass('overflow');
			$('.menu-button').click(function(){
		 		if($(this).hasClass('open')) {
		 			$(this).removeClass('open');
		 			$nav.stop().slideToggle(200);
		 			$parent.removeClass('open').addClass('closed').children('ul').slideUp();
		 			$carrot.removeClass('hide');
		 		} else {
		 			$(this).addClass('open');
		 			$nav.stop().slideToggle(200);
		 		}
		 	});
			$carrot.click(function(){
				if($(this).parent('li').hasClass('closed')) {
					$(this).addClass('hide');
					$(this).parent('li')
						.removeClass('closed')
							.addClass('open')
								.children('ul')
									.slideDown(200);
				}
			});
		}
	});
 	
	// NAV WIDTH
	$top_nav_items = $nav.find('>li');
	$count = $top_nav_items.length;
	$nav_width = 100 / $count;
	$nav_percent = $nav_width + "%";
	$nav.find('>li').css('width',$nav_percent);
	$nav.find('>li').click(function(){
	     window.location=$(this).find("a").attr("href"); 
	     return false;
	});
	

	






 });