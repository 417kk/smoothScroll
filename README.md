## Description
テンプレート集  

## Demo
[デモ](http://cdg3.demopage.jp/html/kanazawa/template/html2/)

## Install
・Sass

## Usage
**[css]**  
```
sass/
|
|— modules/
|     |— _import.scss  # インポート
|     |— _mixin.scss  # ミックスイン
|     `— _variable.scss  # 変数設定
|
|— partials/
|     |— base/
|     |     |— share/  # コンポーネントの各パーツ設定
|     |     |     |—...
|     |     |     |—...
|     |     |     `— hogehoge.scss
|     |     |
|     |     |— _0-0-foundation.scss
|     |     |— _2-1-component.scss
|     |     |— _2-2-animation.scss
|     |     |— _2-3-overlayer.scss
|     |     `— _2-4-order.scss
|     |
|     |— content/
|     |     |— _hogehoge.scss
|     |     `— _hogehoge.scss
|     |
|     `— utility/
|     　     |— _utility.scss  # bootstrap.css依存の汎用クラス
|       　   `— _vendor.scss  # 
|
|— base.scss  # base ディレクトリ内のファイルの読み込み順指定
|
|— config.rb  # コンパイル用設定
|
`— utility.scss  # utility ディレクトリ内のファイルの読み込み順指定
```
