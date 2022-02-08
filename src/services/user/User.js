User = function() {
	
	this.createUser = function(PDO, user) {
		return new Promise(function(resolve, reject) {
			var sql = 'INSERT INTO users (Nome, DataNasc, Foto) VALUES ?';
			var values = [[user.nome, user.dataNasc, user.foto]];
			PDO.query(sql, [values], function(err, resp){
				if(err) reject(err);
				resolve(resp.insertId);
			});
		});
	}

	this.editUser = function(PDO, user) {
		return new Promise(function(resolve, reject) {
			var sql = 'UPDATE users SET Nome = ?, DataNasc = ?, Foto = ? WHERE idUser = ?';
			var values = [user.nome, user.dataNasc, user.foto, user.cod];
			PDO.query(sql, [values], function(err, resp){
				if(err) reject(err);
				resolve(resp.insertId);
			});
		});
	}

	this.delUser = function(PDO, id) {
		return new Promise(function(resolve, reject) {
			var sql = 'DELETE FROM users WHERE idUser = ?';
			var values = [id];
			PDO.query(sql, [values], function(err, resp){
				if(err) reject(err);
				resolve({ url: 'URL deleted' });
			});
		});
	}

	this.getUser = function(PDO, id) {
		return new Promise(function(resolve, reject) {
			const sql = 'SELECT idUser AS cod, Nome AS nome, DataNasc AS dataNasc, Foto AS foto FROM users WHERE idUser = ?';
			PDO.query(sql, [id], function(err, resp){
				if(err) reject(err);
				resolve(resp[0]);
			});
		});
	}

	this.getAllUsers = function(PDO) {
		return new Promise(function(resolve, reject) {
			const sql = 'SELECT idUser AS cod, Nome AS nome, DataNasc AS dataNasc, Foto AS foto FROM users';
			PDO.query(sql, function(err, resp){
				if(err) reject(err);
				resolve(resp);
			});
		});
	}
};

module.exports = User;