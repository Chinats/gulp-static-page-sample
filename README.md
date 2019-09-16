# blog

## 最初の開発準備

- command lineとgulpとgulp-ejsをインストールする
```
$ npm install --global gulp-cli
$ npm install --save-dev gulp
$ npm install --save-dev gulp-ejs
```

- 便利なのでsassとautoprefixerをインストールする
```
$ npm install node-sass gulp-sass --save-dev
$ npm install --save-dev gulp-autoprefixer
```

- 拡張子をhtmlに指定するために利用するrenameをインストールする
```
$ npm install --save-dev gulp-rename
```

## gulpの実行

```
$ gulp
```
（src配下で更新した内容が `dist/` ディレクトリにビルドされます。）
