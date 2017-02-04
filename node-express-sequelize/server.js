var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */
app.get('/users',function(req,res){
	User.findAll({
		username
	}).then(function(user){
		res.sendStatus(200)
		res.json(user)
	})
})


module.exports = { 
  app: app,
  User: User
};
