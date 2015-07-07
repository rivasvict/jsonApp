var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var express      = require('express');
var path         = require('path');

var mods = {};

mods.app  = express();
mods.http = require('http').Server(mods.app);

var index    = require('./routes/index')(mods);
var saveJson    = require('./routes/saveJson')(mods);

var user = {};

mods.app.use('/',index);
mods.app.use('/',saveJson);

mods.app.use(express.static(__dirname + '/public'));
mods.app.use(express.static(__dirname + '/data'));
mods.app.use(express.static(__dirname + '/bower_components'));

mods.app.set('views', path.join(__dirname, 'views'));
mods.app.set('view engine', 'jade');

mods.app.use(bodyParser.json());
mods.app.use(bodyParser.urlencoded());
mods.app.use(cookieParser());

mods.http.listen(process.env.PORT || 5000);
