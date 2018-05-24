## Description
ヘッダー固定されてるサイトのアンカーリンクがずれるのを直すjsのサンプルです  

## Demo
[デモ](https://417kk.github.io/anchorScroll-fixedHeader/)
<<<<<<< HEAD
=======

## Note
href="hoge/#fuga"　および　href="hoge/hogehoge.html#fuga"　の様なリンクに付いているアンカーリンクを削除してlocation.hrefさせた後、
localStorageに保存したアンカーリンクの文字列と合致するIDへ移動させます。
>>>>>>> release/201805241713

## Usage
aにSP時のヘッダーの高さ。  
bにPC時のヘッダーの高さ。  
cにブレイクポイントの値。  
dにヘッダーの要素名。  
eにスクロールインのアニメーションでフェードインする場合にずらしている高さを入れてください(translateYの値です)。
<<<<<<< HEAD
固定していない。またはスクロールアニメーションを入れてないなどの場合はそれぞれの変数に0を入れてください。    
=======
固定していない、またはスクロールアニメーションを入れてないなどの場合はそれぞれの変数に0を入れてください。    
>>>>>>> release/201805241713

**[注意]  
jquery.easing.jsを使っているので先にそちらを読み込んでからこのjsを設置してください。**  

[出来ないこと]  
1.リキッドでヘッダーの高さが変わるような仕様には対応してません。  
2.上記とかぶりますが、スクロールしてヘッダーの高さが変わるような仕様にも対応してません。  
<<<<<<< HEAD
3.ページ外リンクで設定している100secは仕様でこれ以下に設定できません。

	$(window).on('load', function() {
		var a, b, c, d;
		a = 48; //sp height
		b = 111; // pc height
		c = 992; // break point
		d = $('#l-header'); // header element
		e = 0; // if translateY animation

		var url = $(location).attr('href');
		var window_width = $(window).width();
		var h = (window_width < c) ? a : b;

		/*external links*/
		if(url.indexOf('#') != -1){
			var id = url.split('#');
			var $target = $('#' + id[id.length - 1]);
			if($target.length){
				var pos = $target.offset().top - h - e;
				$("html, body").animate({scrollTop:pos}, 100);
			}
=======
```
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
>>>>>>> release/201805241713
		}
	}


	/*internal links*/
	$('a[href*="#"]').on('click', function() {
		var href = $(this).attr('href');

<<<<<<< HEAD
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
=======
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
>>>>>>> release/201805241713
	});

	/* initialize */
	localStorage.removeItem('anchor');

});
```

## License

<<<<<<< HEAD
## License

=======
>>>>>>> release/201805241713
[MIT](https://raw.githubusercontent.com/417kk/anchorScroll-fixedHeader/master/LICENSE)

