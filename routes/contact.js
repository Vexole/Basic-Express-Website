var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'invisible.horn@gmail.com',
			pass: 'IdeapadS510p'
		}
	});

	var mailOptions = {
		from: 'John Doe <johndoe@outlook.com>',
		to: 'invisible.horn@gmail.com',
		subject: 'Website Submission',
		text: 'Message goes here..... Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
		html: '<p> YOu got a new submission with the following details..</p><ul><li>Name: ' + req.body.name + ' </li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'
	};
	transporter.sendMail(mailOptions, function(err, info){
		if(err){
			console.log(err);
			res.redirect('/');
		}else{
			console.log("Message Sent! " + info.response);
			res.redirect('/');
		}
	})
});

module.exports = router;
