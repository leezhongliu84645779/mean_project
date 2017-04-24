var path = require('path');
module.exports.homePage = function(req, res) {
	res
		.status(200)
		.sendFile(path.resolve(__dirname + '../../../public/index.html'));
}