var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
  
  
  var ESpeak = require('node-espeak');
ESpeak.initialize();
ESpeak.onVoice(function(wav, samples, samplerate) {
    // TODO: Do something useful
});
ESpeak.speak("Hello world!");

});
server.listen(8080);


