var http = require('http');
var ESpeak = require('node-espeak');

var generateWAVFile = function(){
 
  var espeak = require('espeak');
  
  // optionally set the path to the `espeak` cli program if it's not in your PATH
  //espeak.cmd = '/usr/bin/espeak';

  espeak.speak('hello world', function(err, wav) {
    if (err) return console.error(err);

    // get the raw binary wav data
    var buffer = wav.buffer;

    // get a base64-encoded data URI
    var dataUri = wav.toDataUri();
  });

  // optionally add custom cli arguments for things such as pitch, speed, wordgap, etc.
  espeak.speak('hello world, slower', ['-p 60', '-s 90', '-g 30'], function(err, wav) {});
}

var server = http.createServer(function(req, res) {
  
  
  
  /*****/
  
  res.writeHead(200);
  
  var html_content ='<!DOCTYPE html><html>\
    <head>\
    <title>Ottsa</title>\
    </head>\
    <body style="background-color:#50A0FF">\
    <h2>OTTSA</h2>\
    <textarea id="story" name="story" rows="5" cols="33">Texte à synthétiser</textarea>\

  <input type="button" value="Add to favorites">\

    <audio controls="controls">\
      <source src="chanson.ogg" type="audio/ogg" />\
      <source src="chanson.mp3" type="audio/mp3" />Votre navigateur ne supporte pas la balise AUDIO.</audio>\
    </body>\
    </html> \
  ';
  
  
  res.end(html_content);

});
server.listen(8080);


