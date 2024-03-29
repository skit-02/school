// express ライブラリをimport
const express = require('express');

// mysqlを使うためのコード
const mysql = require('mysql');

// expressクラスのインスタンスを作成・保持
const app = express();

// JSONでデータをやり取りしたい場合以下を記述
// app.use(express.json());

/* cssとか画像の入ったファイルの読み込み　cssの適用のために必要 */
app.use(express.static('public'));

/* ルーティング　urlにアクセスしたときに何するかの処理 */
app.get('/', (req, res) => {
    res.render('top.ejs');
});
  
app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

app.get('/target1900', (req, res) => {
  res.render('target1900.ejs');
});

app.get('/target1200', (req, res) => {
  res.render('target1200.ejs');
});

/*  */
app.post('/send', (req, res) => {
  res.redirect('/send');
});



// サーバー起動(ポート3000)
app.listen(3000, () => console.log("ok"));


// get use とかのメソッドがあんまりわかんない
