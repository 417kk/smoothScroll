Name
scroll

Overview

## Description
ヘッダー固定されてるサイトのアンカーリンクがずれるのを直すjsです

## Demo

## VS.

## Requirement

## Usage
変数headerHeightにヘッダーの実数を入れてください

$(window).on('load resize', function() {
	var url = $(location).attr('href');

	/*external links*/
	if(url.indexOf('/#') != -1){
		var id = url.split('/#');
		var $target = $('#' + id[id.length - 1]);
		var headerHeight = ($target.offset().top > 111) ? 51 : 111;
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
		var headerHeight = ($target.offset().top > 111) ? 51 : 111;
		if($target.length){
			var pos = $target.offset().top - headerHeight;
			$("html, body").animate({
				scrollTop:pos
			}, 600, 'easeInOutQuart');
			return false;
		}
	});
});

## Install

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[417kk](https://github.com/417kk/)
