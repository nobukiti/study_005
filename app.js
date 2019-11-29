/****************************************
 * study_005 
 ***************************************/

// express関連
var express = require('express');
var app = express();
var http = require('http').Server(app);
const PORT = process.env.PORT || 3002;

// path関連
var path = require('path');

// router関連
const filePath = 'public';
var router = require('./routes/index.js');

// socket.io関連
var io = require('socket.io')(http);

// mongodb関連
var mongodb = require('mongodb');
var mongoclient = mongodb.mongoclient;
const url = 'mongodb://127.0.0.1:127017/';
dbName = 'notices';


/****************************************
 * 初期化処理
 ***************************************/

function init() {
  // http:xxxx.../にリクエストが来た場合はpublicをルートディレクトリとする
  // '/'は別のパスを設定する事ができる
  app.use('/', express.static(path.join(__dirname, filePath)));

  // ルーティングはrouterにお任せする
  app.use(router);
  http.listen(PORT); // app.listen(PORT)してしまうとsocket.ioでエラー
  console.log('Listen on PORT :' + PORT);
}

// app.jsが読み込まれたらconnectionが読み込まれるっぽい
function socketIO() {
  io.on('connection', socket => {
    console.log('connection');
  });
}

// init()処理実行
init();

// socket.io処理の実行
socketIO();
