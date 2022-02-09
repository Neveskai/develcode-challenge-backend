User = function () {

	this.createUser = function (PDO, user) {
		return new Promise(function (resolve, reject) {
			var sql = 'INSERT INTO users (Nome, DataNasc, Foto) VALUES ?';
			var values = [[user.nome, user.dataNasc, user.foto]];
			PDO.query(sql, [values], function (err, resp) {
				resolve(resp.insertId);
			});
		});
	}

	this.editUser = function (PDO, user) {
		return new Promise(function (resolve, reject) {
			var sql = 'UPDATE users SET Nome = ?, DataNasc = ?, Foto = ? WHERE idUser = ?';
			var values = [user.nome, user.dataNasc, user.foto, user.cod];
			PDO.query(sql, values, function (err, resp) {
				resolve(user.cod);
			});
		});
	}

	this.delUser = function (PDO, id) {
		return new Promise(function (resolve, reject) {
			var sql = 'DELETE FROM users WHERE idUser = ?';
			var values = [id];
			PDO.query(sql, [values], function (err, resp) {
				resolve('user deleted');
			});
		});
	}

	this.getUser = function (PDO, id) {
		return new Promise(function (resolve, reject) {
			const sql = 'SELECT idUser AS cod, Nome AS nome, DATE_FORMAT(DataNasc, "%X-%m-%d") AS dataNasc, IF(Foto = 1, CONCAT(idUser,".jpg"), "default.jpg") AS foto FROM users WHERE idUser = ?';
			PDO.query(sql, [id], function (err, resp) {
				resolve(resp[0]);
			});
		});
	}

	this.getAllUsers = function (PDO) {
		return new Promise(function (resolve, reject) {
			const sql = 'SELECT idUser AS cod, Nome AS nome, DATE_FORMAT(DataNasc, "%X-%m-%d") AS dataNasc, IF(Foto = 1, CONCAT(idUser,".jpg"), "default.jpg") AS foto FROM users';
			PDO.query(sql, function (err, resp) {
				resolve(resp);
			});
		});
	}
};

module.exports = User;