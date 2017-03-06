var path = require('path');
var express = require('express');
var webpack = require('webpack');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var config = require('./webpack.prod.config');
var port = process.env.PORT || 3000;

var app = express();

if (process.env.NODE_ENV !== 'production') {
  config = require('./webpack.dev.config');
  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
  app.use(morgan('combined'));
}

app.use(bodyParser.json({type: '*/*'}));

app.use('/assets',express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  }
  else {
    console.info('server listening on port: %s. Visit http://localhost:%s.', port, port);
  }
})
