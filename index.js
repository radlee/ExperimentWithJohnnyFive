var five = require('johnny-five');

var myBoard = new five.Board();
myBoard.on('ready', function(){
  console.log('ready to do stuff...');
  var led = new five.Led(13);
  led.blink(10);
});
