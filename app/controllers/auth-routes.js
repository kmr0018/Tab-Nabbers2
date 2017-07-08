/**
 * Created by esterlingaccime on 6/20/17.
 */
var db = require("../models"),
    bcrypt = require("bcrypt"),
    jwt = require("jsonwebtoken"),
    express = require("express"),
    router = express.Router(),
    secret = require("../config/secrets"),
    path = require("path");



router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});


router.post("/sign-up", function(req, res) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            console.log(err);
        } else {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                if (err) throw err;

                db.user.create({
                        username: req.body.username,
                        password: hash
                    })
                    .then(function(data) {
                        //console.log(data);
                        res.status(200).json({ status: 'ok' });
                    })
                    .catch(function(err) {
                        console.log(err);
                        res.status(400).json(err);
                    });
            });
        }
    })
});


router.post("/sign-in", function(req, res) {
    db.user.findOne({
            username: req.body.username
        })
        .then(function(user) {
            if (!user) {
                res.json("No user found!!");
            } else {
                bcrypt.compare(req.body.password, user.password, function(err, valid) {
                    if (err) {
                        res.json("Username or password is incorrect");
                    } else {

                        var token = jwt.sign({
                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                            data: {
                                username: user.username
                            }
                        }, secret);

                        res.cookie('jwtauthtoken', token, {
                            secure: process.env.NODE_ENV === 'production',
                            signed: true
                        });

                        res.json({
                            "status": "Ok",
                            token: token
                        });

                        // res.redirect("/profile");


                    }

                });
            }
        })
        .catch(function(err) {
            res.json(err);
        });
});







module.exports = router;
