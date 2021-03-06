var crypto = require('crypto');
var User = require('./user.js');
var Publish = require('./publish.js');
var Comment = require('./comments.js');
var settings = require('../settings.js');
var fs = require('fs');



module.exports = function(app){
	app.get('/constructor',function(req,res){
		res.render('constructor',{
			title : "Constructor Example",
			user : req.session.user,
			success : req.flash('success').toString(),
			error : req.flash('error').toString(),
			site : settings.site
		});
	});
	app.get('/checkbox',function(req,res){
		res.render('checkbox',{
			title : "Constructor Example",
			user : req.session.user,
			success : req.flash('success').toString(),
			error : req.flash('error').toString(),
			site : settings.site
		});
	});

	app.get('/checkbox2',function(req,res){
		res.render('Subscribe',{
			title : "Publish/Subscriber Example",
			user : req.session.user,
			success : req.flash('success').toString(),
			error : req.flash('error').toString(),
			site : settings.site
		});
	});

	app.get('/checkbox3',function(req,res){
		res.render('Module',{
			title : "Module Example",
			user : req.session.user,
			success : req.flash('success').toString(),
			error : req.flash('error').toString(),
			site : settings.site
		});
	});


	app.get('/AjaxModule',function(req,res){
		var tage = req.query.tags;
		console.log(tage);
		if(tage){
			res.send({items: tage});
		}
		else{
			res.render('AjaxModule',{
				title : "Module Example",
				user : req.session.user,
				success : req.flash('success').toString(),
				error : req.flash('error').toString(),
				site : settings.site
			});
		}
	});

	app.post('/AjaxModule',function(req,res){
		var tage = req.query.tags;
		console.log(tage);
		if(tage){
			res.send({items: tage});
		}
	});


	app.get('/test',function(req,res){
		res.render('test',{
			title : "Module Example",
				user : req.session.user,
				success : req.flash('success').toString(),
				error : req.flash('error').toString(),
				site : settings.site
		});
	});

}