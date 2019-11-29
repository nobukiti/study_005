/****************************************
 * study_005 
 ***************************************/

// index.htmlが読み込まれたら'connect'が読み込まれるっぽい
var socketio = io();
socketio.on('connect', () => {
  console.log('connect');
});