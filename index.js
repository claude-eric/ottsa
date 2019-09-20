var http = require('http');
var ESpeak = require('node-espeak');

var server = http.createServer(function(req, res) {
  
  ESpeak.initialize();
  /*ESpeak.onVoice(function(wav, samples, samplerate) {
      // TODO: Do something useful
  });
  ESpeak.speak("Hello world!");*/
  
  res.writeHead(200);
  
  var html_content ='<!DOCTYPE html><html>\
    <head>\
    <title>Ottsa</title>\
    </head>\

    <body>\
    <textarea id="story" name="story"\
              rows="5" cols="33">\
    Texte à synthétiser\
    </textarea>\
    </body>\

    </html> \
  
  ';
  
  
  res.end(html_content);

});
server.listen(8080);


