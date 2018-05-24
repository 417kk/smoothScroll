## Description
ヘッダー固定されてるサイトのアンカーリンクがずれるのを直すjsのサンプルです  

## Demo
[デモ](https://417kk.github.io/anchorScroll-fixedHeader/)

## Note
href="hoge/#fuga"　および　href="hoge/hogehoge.html#fuga"　の様なリンクに付いているアンカーリンクを削除してlocation.hrefさせた後、
localStorageに保存したアンカーリンクの文字列と合致するIDへ移動させます。

## Usage
aにSP時のヘッダーの高さ。  
bにPC時のヘッダーの高さ。  
cにブレイクポイントの値。  
dにヘッダーの要素名。  
eにスクロールインのアニメーションでフェードインする場合にずらしている高さを入れてください(translateYの値です)。
固定していない、またはスクロールアニメーションを入れてないなどの場合はそれぞれの変数に0を入れてください。    

**[注意]  
jquery.easing.jsを使っているので先にそちらを読み込んでからこのjsを設置してください。**  

[出来ないこと]  
1.リキッドでヘッダーの高さが変わるような仕様には対応してません。  
2.上記とかぶりますが、スクロールしてヘッダーの高さが変わるような仕様にも対応してません。  
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
```

## License

[MIT](https://raw.githubusercontent.com/417kk/anchorScroll-fixedHeader/master/LICENSE)

