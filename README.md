## Description
ヘッダー固定されてるサイトのアンカーリンクがずれるのを直すjsのサンプルです  

## Demo
[デモ](https://417kk.github.io/anchorScroll-fixedHeader/)

## Usage
デモでは変数hに変化前のヘッダーの高さと変化後の高さ。  
変数fixHにスクロール後に変化したヘッダーの高さを入れてます。  
各リンクではリンク先の高さが変化前の高さより高ければfixHの値、そうでなければhの値が入ります。  
ここらへんはそもそも変化しねーしとか、サイトのデザインによって結構変わると思うので、jsの中身を適宜編集して使ってください。  
また、デモではeasingも使っています。このままコピペするとeasing入れないとエラー吐くので、このまま使う場合は入れてください。

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


## License

[MIT](https://raw.githubusercontent.com/417kk/anchorScroll-fixedHeader/master/LICENSE)

