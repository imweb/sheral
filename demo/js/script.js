

// 请忽略js，粗糙的为了简单的演示使用

$(function() {
	$('.js-back').on('click', function() {
		window.location.href = 'index.html' ;
	})
	// $('.js-toast-btn').on('click', function() {
	// 	$('.js-toast-wrap').addClass('active');
	// })
	$('.fixed-quick-tool').click(function(){
		$(this).toggleClass('active');
	});

	$('.icon-switch').click(function(){
		$(this).toggleClass('active');
	})

	$('.icon-checkbox').add('.icon-radio').click(function(){
		if($(this).hasClass('disabled')){
			return;
		} 
		$(this).toggleClass('active');
	})

	$('.line-list--select').on('click', '.line-item', function(){
		$(this).siblings('.line-item').removeClass('active');
		$(this).toggleClass('active');
	})
	$('.line-list--multi-select').on('click', '.line-item', function(){
		$(this).toggleClass('active');
	})

	$('.js-toast-btn').on('click', function(){
		var $toastWrap = $('.toast-wrap');
		var index = $(this).index();
		console.log(index);
		$toastWrap.removeClass('active').eq(index).addClass('active');
		setTimeout(function(){
			$toastWrap.removeClass('active')
		},2000)
	})

	$('.js-dialog-btn').on('click', function(){
		var $dialogWrap = $('.dialog-wrap');
		var index = $(this).index();
		console.log(index);
		$dialogWrap.removeClass('active').eq(index).addClass('active')
		.on('click',function(){
			$(this).removeClass('active');
		});
	})

	$('.js-actionsheet-btn').on('click', function(){
		$('.panel-wrap')
		.addClass('active')
		.on('click', function(){
			$(this).removeClass('active');
		});
	})

	$('.js-picker-btn').on('click', function(){
		$('.panel-wrap')
		.addClass('active')
		.on('click', function(){
			$(this).removeClass('active');
		});
	})	
})

// 圆形进度条
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