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
	var url = $(location).attr('href');
	var window_width = $(window).width();
	var h = (window_width < 768) ? 51 : 111;
	var fixH = 51;

	/*external links*/
	if(url.indexOf('/#') != -1){
		var id = url.split('/#');
		var $target = $('#' + id[id.length - 1]);
		var headerHeight = ($target.offset().top > h) ? fixH : h;
		if($target.length){
			var pos = $target.offset().top - headerHeight;
			$("html, body").animate({scrollTop:pos}, 1);
		}
	}

	/*internal links*/
	$('a[href*="#"]').on('click', function() {
		var href = $(this).attr('href');
		var id = href.split('#');
		var $target = $('#' + id[id.length - 1]);
		var headerHeight = ($target.offset().top > h) ? fixH : h;
		if($target.length){
			var pos = $target.offset().top - headerHeight;
			$("html, body").animate({
				scrollTop:pos
			}, 600, 'easeInOutQuart');
			return false;
		}
	});
});

