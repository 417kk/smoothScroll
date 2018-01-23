## Description
ヘッダー固定されてるサイトのアンカーリンクがずれるのを直すjsのサンプルです  

## Demo
[デモ](https://417kk.github.io/anchorScroll-fixedHeader/)

## Usage
aにSP時のヘッダーの高さ。  
bにPC時のヘッダーの高さ。  
cにブレイクポイントの値。  
dにヘッダーの要素を入れてください。  

[注意]  
jquery.easing.jsを使っているので先にそちらを読み込んでからこのjsを設置してください。  

[出来ないこと]  
1.リキッドでヘッダーの高さが変わるような仕様には対応してません。  
2.上記とかぶりますが、スクロールしてヘッダーの高さが変わるような仕様にも対応してません。  

	$(window).on('load', function() {
		var a, b, c, d;
		a = 48; //sp height
		b = 111; // pc height
		c = 992; // break point
		d = $('#l-header'); // header element

		var url = $(location).attr('href');
		var window_width = $(window).width();
		var h = (window_width < c) ? a : b;

		/*external links*/
		if(url.indexOf('#') != -1){
			var id = url.split('#');
			var $target = $('#' + id[id.length - 1]);
			if($target.length){
				var pos = $target.offset().top - h;
				$("html, body").animate({scrollTop:pos}, 0.1);
			}
		}

		/*internal links*/
		$('a[href*="#"]').on('click', function() {
			var href = $(this).attr('href');
			var id = href.split('#');
			var $target = $('#' + id[id.length - 1]);
			var marginTop = d.outerHeight();
			if($target.length){
				var pos = $target.offset().top - marginTop;
				$("html, body").animate({
					scrollTop:pos
				}, 600, 'easeInOutQuart');
				return false;
			}
		});
	});


## License

[MIT](https://raw.githubusercontent.com/417kk/anchorScroll-fixedHeader/master/LICENSE)

