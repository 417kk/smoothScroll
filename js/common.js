/* ----------------------------------------------------------------------------------------------------
// タッチデバイス対応アニメーション
---------------------------------------------------------------------------------------------------- */
;(function(window, document, undefined) {

    var deviceEvents = {
        Touch     : typeof document.ontouchstart !== 'undefined',
        Pointer   : window.navigator.pointerEnabled,
        MSPointer : window.navigator.msPointerEnabled
    };

    var eventNames = {
        start     : deviceEvents.Pointer ? 'pointerdown' : deviceEvents.MSPointer ? 'MSPointerDown' : deviceEvents.Touch ? 'touchstart' : 'mousedown',
        move      : deviceEvents.Pointer ? 'pointermove' : deviceEvents.MSPointer ? 'MSPointerMove' : deviceEvents.Touch ? 'touchmove'  : 'mousemove',
        end       : deviceEvents.Pointer ? 'pointerup'   : deviceEvents.MSPointer ? 'MSPointerUp'   : deviceEvents.Touch ? 'touchend'   : 'mouseup',
        click     : 'click'
    };

    window.eventNames = eventNames;

})(this, this.document);

;(function($, window, document, undefined) {
    $('.js-touch').on(eventNames.start, function () {
        $(this).addClass('is-touch');
    });

    $('.js-touch').on(eventNames.end, function () {
        $(this).removeClass('is-touch');
    });

})(jQuery, this, this.document);


/* ----------------------------------------------------------------------------------------------------
// ハンバーガーメニュー
---------------------------------------------------------------------------------------------------- */
$('.markWrap').on('click', function() {
	$('.mark').toggleClass('is-active');
	$('.sNav').toggleClass('is-active');
});


/* ----------------------------------------------------------------------------------------------------
// ローディング
---------------------------------------------------------------------------------------------------- */
$(window).on('load', function() {
	if ($('#loader').get(0)){
		$("#loader span").stop().animate({
			'width': '100%'
		},1000,
		'easeInExpo',
		function(){
			$.when(
				$("#l-loader").delay(300).fadeOut(350, function(){
					$('#l-wrap').addClass('is-completed');
					scrollin();
				})
			).done(function(){
				$(window).on('scroll resize',function (){
					scrollin();
				});
			});
		});
	}
});


/* ----------------------------------------------------------------------------------------------------
// ヘッダー固定
---------------------------------------------------------------------------------------------------- */
/* ヘッダー固定 */
$(function(){
	var headerHeight = $('#l-header').outerHeight();
	$(window).on('load scroll', function() {
		var scrollTop = $(this).scrollTop();
		if (scrollTop > headerHeight) {
			$('#l-header').addClass('is-fixed');
			$('.markWrap').addClass('is-fixed');
		} else {
			$('#l-header').removeClass('is-fixed');
			$('.markWrap').removeClass('is-fixed');
		}
	});
});


/* ----------------------------------------------------------------------------------------------------
// スクロールイン
---------------------------------------------------------------------------------------------------- */
function scrollin() {
	$('.js-scrollin').each(function(){
		var windowHeight = $(window).height();
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		if (scroll > elemPos - windowHeight){
			$(this).addClass('is-scrollin');
		}
	});
}


/* ----------------------------------------------------------------------------------------------------
// tab
---------------------------------------------------------------------------------------------------- */
$(function(){
	$('.js-tabMenu a').on('click', function() {
		var index = $(this).index('.js-tabMenu a');

		$('.anc').removeClass('is-active');
		$('.anc').eq(index).addClass('is-active');

		$.when(
			$('.tab-content.is-active').fadeOut(300)
		).done(function(){
			$('.tab-content.is-active').removeClass('is-active');
			$('.tab-content').eq(index).fadeIn(300).addClass('is-active');
		});
	});
});


/* ----------------------------------------------------------------------------------------------------
// changeDeviceImg
---------------------------------------------------------------------------------------------------- */
$(function(){
	var $elem = $('.changeDeviceImg');

	function changeImg() {
		var window_width = $(window).width();
		$elem.each(function(){
			if (window_width < 768) {
				$(this).attr('src',$(this).attr('src').replace('pc','sp'));
			} else {
				$(this).attr('src',$(this).attr('src').replace('sp','pc'));
			}
		});
	}

	changeImg();

	var resizeTime;
	$(window).on('resize', function() {
		clearTimeout(resizeTime);
		resizeTime = setTimeout(function(){
			changeImg();
		}, 100);
	});
});


/* ----------------------------------------------------------------------------------------------------
// anchor link
---------------------------------------------------------------------------------------------------- */
/* anchor */
$(window).on('load', function() {
	var a, b, c, d;
	a = 48; //sp height
	b = 111; // pc height
	c = 992; // break point
	d = $('#l-header'); // header element
	e = 0; // translateY animation

	var window_width = window.innerWidth;
	var h = (window_width < c) ? a : b;

	var dirArr = location.href.split("/");
	var dir = dirArr[dirArr.length -2];

	/*external links*/
	if(localStorage.getItem('anchor') != -1){
		var id = localStorage.getItem('anchor');
		var $target = $('#' + id);
		if($target.length){
			var pos = $target.offset().top - h - e;
			$("html, body").animate({scrollTop:pos}, 10);
		}
	}


	/*internal links*/
	$('a[href*="#"]').on('click', function() {
		var href = $(this).attr('href');

		var idArr = href.split('#');
		var id = idArr[idArr.length - 1];

		var linkArr = href.split('/');
		var linkDir = linkArr[linkArr.length - 2];

		var $target = $('#' + id);
		var marginTop = d.outerHeight();

		if (dir == linkDir || linkDir == undefined) {
			var pos = $target.offset().top - marginTop;
			$("html, body").animate({
				scrollTop:pos
			}, 600, 'easeInOutQuart');
			return false;
		} else {
			localStorage.setItem('anchor', id);
			location.href = idArr[idArr.length - 2];
			return false;
		}
	});

	/* initialize */
	localStorage.removeItem('anchor');

});