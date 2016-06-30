// document.addEventListener('DOMContentLoaded', function(){
// 	var Back = document.querySelectorAll('.js-back')[0];
// 	Back.addEventListener('click', function(){
// 		window.location.href = '/' ;
// 	})

// 	// toast

// })

$(function() {
	$('.js-back').on('click', function() {
		window.location.href = 'index.html' ;
	})
	// $('.js-toast-btn').on('click', function() {
	// 	$('.js-toast-wrap').addClass('active');
	// })
	$('.fixed-quick-tool').click(function(){
		$(this).toggleClass('active');
	})
	
})

$(window).load(function(){
	var $circleProgress = $('.circle-progress'),
		deg1 = 60,
		deg2 = 230,
		deg3 = deg2 - 180;
	var $progress1 = $circleProgress.eq(0),
		$progress2 = $circleProgress.eq(1);
	$progress1.find('.progress-num').html(parseInt(deg1 * 100 / 360) +'%');
	$progress2.find('.progress-num').html(parseInt(deg2 * 100 / 360)+'%');
	$progress1.find('.right-inner').css('transform', 'rotate('+ deg1 +'deg)');
	$circleProgress.eq(1).find('.right-inner').css('transform', 'rotate(180deg)');
	$circleProgress.eq(1).find('.left-inner').css('transform', 'rotate('+ deg3 +'deg)');	
})