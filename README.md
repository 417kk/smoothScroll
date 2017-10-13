## Description
ヘッダー固定されてるサイトのアンカーリンクがずれるのを直すjsです

## Demo
[デモ](https://417kk.github.io/anchorScroll-fixedHeader/)

## Usage
変数hにブラウジング時のヘッダーの高さ。  
変数fixHにスクロール後に変化したヘッダーの高さを入れてください。  
スクロールしてもヘッダーの高さが変化しない場合などは適宜編集して使ってください。

	$(window).on('load resize', function() {
		var url = $(location).attr('href');
		var h = 111;
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

