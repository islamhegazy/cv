/*global $ window document*/
$(document).ready(function () {
	'use strict';
    
    /*========== toggleClass over==========*/
	$(".myul li ").on('click', function () {
		$('#' + myid).toggleClass('over');
		var myid = $(this).children().attr('id');
		if (!$('#' + myid).hasClass('over')) {
			$('#' + myid).addClass('over').parent().siblings().children().removeClass('over');
		}
	});
    
        /*=========plugin center element===========*/
	$.fn.centring = function () {
		$(this).css({
			'position': 'relative',
			top: ($(window).height() - $(this).height()) / 2
		});
	};
	$('.myname').centring();
	$('.about').centring();
    
        /*===========show and hide other section=========*/
	$('html ,body').on('click', '.myul li a', function () {
		var datachange = $(this).data('change');
		$('#' + datachange).show().siblings('section').hide();
	});
    
        /*==========remove animation on media 991==========*/
	if ($(window).width() < 991) {
		$('.Home').removeClass('animated slideInRight');
		$('.About .about-me').removeClass('animated rotateInDownLeft');
		$('.Resume-me').removeClass('animated slideInRight');
		$('.port').removeClass('animated jackInTheBox');
		$('.con ').removeClass('animated zoomIn');
	}
    
        /*==========hide menu in click at mobile==========*/
	$(function () {
		$('.nav a').on('click', function () {
			if ($('.navbar-toggle').css('display') !== 'none') {
				$(".navbar-toggle").trigger("click");
			}
		});
	});
    
        /*=========loading===========*/
	$(".over-loading div").delay(5000).fadeOut(800, function () {
		$("body").css("overflow", "inherit");
		$(this).parent().fadeOut(600, function () {
			$(this).remove();
		});
	});
});
