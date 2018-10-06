var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');


let router = express.Router();
let User = require("../models/user");

router.get('/', (req, res) => {
	 
	if(req.session.page_views >= 0){
		req.session.page_views++;
	} else {
		req.session.page_views = 0;
	}

	res.render('newUser', {
		views: req.session.page_views
	} );
	
}) 

router.get("/co", (req, res) => {
	res.cookie('name', 'express').send('cookie set');
	console.log('Cookies: ', req.cookies);
})

router.post('/', (req, res)=> {
	let userInfo = req.body;
	user = new User(userInfo);
	user.save(function(err, savedUser){
		console.log(`User details are: ${JSON.stringify(savedUser)}`)
	})
	
	res.redirect('/user');
})

router.get("/all", function(req, res){
	User.find(function(err, allUsers){
		console.log(`users: \n ${allUsers}`) 
		res.render('allUsers', {

			users: allUsers
		})
	})
})

router.delete("/:id", function(req, res){
	User.remove({_id:req.params.id}, function(){
		res.redirect('/user/all')
	})
})
module.exports = router;