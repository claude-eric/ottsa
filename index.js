var http = require('http');
var ESpeak = require('node-espeak');

var server = http.createServer(function(req, res) {
  
  ESpeak.initialize();
  ESpeak.onVoice(function(wav, samples, samplerate) {
      // TODO: Do something useful
  });
  ESpeak.speak("Hello world!");
  
  res.writeHead(200);
  res.end('Salut tout le monde !');

});
server.listen(8080);


