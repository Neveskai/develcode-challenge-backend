const PDO = require('./PDO');

test('Test database connection', done => {
	PDO.connect(function(err){
		if(err) { 
			done(err);
		} else {
			done();
		}
		PDO.end();
	});
});