//
// Framework v1.0.0 (https://github.com/diesel1064/Sass-Framework)
// Copyright 2014 Dave Evans Design
// Licensed under http://www.apache.org/licenses/LICENSE-2.0
//
 $(document).ready(function(){

 	// NAVIGATION SCRIPT
 	$nav = $('.main-nav');
 	$nav.find($('.parent')).hover(function(){
 		$(this).find('ul:first').stop().slideToggle(200);
 	});
 	$('.menu-button').click(function(){
 		$(this).toggleClass('open');
 		$nav.toggleClass('mobile');
 		$nav.stop().slideToggle(200);
 	});

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