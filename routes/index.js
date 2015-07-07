var express = require('express');

module.exports = function(_mods){
	var router = express.Router();
	router.get('/', function(req, res) {
		res.render('index', { title: 'JSON File editor' });
	});

	module.exports = router;
	return router;

}
