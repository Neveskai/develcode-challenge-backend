const mysql = require('mysql');

var JDO = mysql.createConnection({
	host    : '127.0.0.1',
	user    : 'root',
	password: '',
	database: 'develcode'
});

module.exports = JDO;