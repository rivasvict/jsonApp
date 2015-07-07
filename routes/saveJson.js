var bodyParser   = require('body-parser');
var express = require('express');
var fs = require('fs');

var mods;

module.exports = function(_mods){
	var mods = _mods;
	mods.app.use(bodyParser.json());
	mods.app.use(bodyParser.urlencoded());	
	var router = express.Router();

	router.post('/saveJson',function(req,res){
		fs.writeFile('./data/vctr.json',JSON.stringify(req.body),function(err){
			if(err){
				return console.log(err);
			}
			console.log("The file was saved!");
		});
		res.send(200);
	});

	//module.exports = router;
	return router;
}
