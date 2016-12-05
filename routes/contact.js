var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/send', function (req, res) {
    //res.send('Form Submitted');
    var transporter = nodemailer.createTransport({
        host: "mailtrap.io",
        port: 2525,
        auth: {
            user: "cdc95470fde647",
            pass: "94d7511c154fde"
        }
    });

    var mailOptions = {
        from: 'Md Nadim Ahmed <cdc95470fde647>',
        to: 'ahmed.nadim59@gmail.com',
        subject: 'Website Submisson',
        text: 'You have a submission with the following details.. Name: ' + req.body.name + 'Email' + req.body.email + 'Message: ' + req.body.message,
        html: '<p>You have a submission with the following details.. </p><ul>' +
        '<li>Name: ' + req.body.name + '</li>' + '<li>Email' + req.body.email + '</li>' +
        '<li>Message: ' + req.body.message + '</li>' + '</ul>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message Sent: ' + info.response);
        res.redirect('/');
    });

});

module.exports = router;
