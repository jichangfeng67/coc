var express = require('express');
var router = express.Router();
var getnews = require('getnews');

/* GET home page. */
router.get('/', function(req, res, next) {
	getnews(function(docs){
		res.render('index', { title: 'EFREI-CHINOIS' , posts:docs, user:req.user});
	});
  
});

router.get('/clashOfClans', function(req, res, next){
	res.render('clashOfClans');
});

router.get('/clashOfClans/news', function(req, res, next){
	res.render('cocnews');
});

router.get('/clashOfClans/members', function(req, res, next){
	res.render('cocmembers');
});

router.get('/member', function(req, res, next){
	res.redirect(302, '/members');
});

module.exports = router;
