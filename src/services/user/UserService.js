UserService = function(app) {
	var User = require('./User');
	var User = new User();
	var PDO = app.get('PDO');

	app.get('/users', function(req, res) {
		User.getAllUsers(PDO).then(users => {
			res.send({ users: users });
		})
	});

	app.get('/user/:id', function(req, res) {
		const id = req.get.id;
		User.getUser(PDO, id).then(user => {
			res.send({ user: user });
		})
	});

	app.put('/user/create', function(req, res) {
		const user = req.body;
		User.createUser(PDO, user).then(cod => {
			res.send({ cod: cod });
		})
	});
	
	app.put('/user/edit', function(req, res) {
		const user = req.body;
		User.editUser(PDO, user).then(cod => {
			res.send({ cod: cod });
		})
	});

	app.delete('/user/delete/:id', function(req, res) {
		const id = req.get.id;
		User.delUser(PDO, id).then(cod => {
			res.send({ cod: cod });
		})
	});
};

export default UserService;