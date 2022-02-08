const express = require('express');
const cors = require('cors');
const PDO = require('./src/services/DB.js');
const UserService = require('./src/services/user/UserService');

const app = express();
app.set('PDO', PDO);
app.use(express.json());
app.use(cors());

var userService = new UserService(app);

app.listen(3001, () => {
  console.log('Backend server running at: http://localhost:3001')
});
