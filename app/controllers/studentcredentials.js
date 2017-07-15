/**
 * Created by esterlingaccime on 6/20/17.
 */
var db = require("../models"),
    bcrypt = require("bcrypt"),
    jwt = require("jsonwebtoken"),
    express = require("express"),
    router = express.Router(),
    secret = require("../config/secrets"),
    path = require("path"),
    formidable = require('formidable'),
    fs = require('fs-extra'),
    cloudinary = require('cloudinary'),
    axios = require("axios");


router.get("/event/data", function(req, res, next) {
    var group = []
    axios.get("https://api.meetup.com/find/groups?page=20&text=JavaScript&key=6b6f260644b44657a442955d383013&sig_id=197617558&sig=8742e95d91419cc26b093bd4070f2beba7415bf3")
        .then(function(data) {
            console.log(data);
            group = data;
            var jsn = JSON.stringify(data);
        })
        .catch(function(er) {
            console.log(er);
        });
    res.json(group)
});

cloudinary.config({
    cloud_name: 'profile-images',
    api_key: '958681958972474',
    api_secret: 'dDX2LC1yjF9dp-6E9fYgVTSITbw'
});

router.get("/bootcamps", function(req, res) {
    db.bootcamp.findAll({}).then(function(bootcamps) {
        res.json(bootcamps);
    })
});

router.post("/cohorts", function(req, res) {
    db.cohort.findAll({
        where: {
            bootcampId: req.body.bootcampId
        }
    }).then(function(cohorts) {
        res.json(cohorts);
    })
});

router.post("/sign-up", function(req, res) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            console.log(err);
        } else {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                if (err) throw err;

                db.user.create({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: hash,
                    bootcampId: req.body.bootcampId,
                    cohortId: req.body.cohortId
                })
                .then(function(data) {
                    res.status(200).send({ message: 'User added to database' });
                })
                .catch(function(err) {
                    res.status(400).send({ message: 'Error adding user to database. Entry not created' });
                });
            });
        }
    })
});

router.post("/sign-in", function(req, res) {
    console.log("Attempting Sign-in");
    db.user.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(user) {
            if (!user) {
                res.json("No user found!!");
            } else {
                bcrypt.compare(req.body.password, user.password, function(err, valid) {
                    if (err) {
                        throw err;
                    }
                    if (valid) {
                        var token = jwt.sign({
                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                            data: {
                                username: user.username
                            }
                        }, secret);
                        // res.cookie('jwtauthtoken', token, {
                        //     secure: process.env.NODE_ENV === 'production',
                        //     signed: true
                        // });


                        res.json({
                            id: user.id,
                            token: token
                        });
                        // res.redirect("/profile");
                    } else {
                        res.status(401).send({ 'message': 'Unauthorized' });
                    }
                });
            }
        })
        .catch(function(err) {
            res.json(err);
        });
});


router.post("/profile", function(req, res) {

    console.log(req.body);
    var info = {
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        github: req.body.github,
        about: req.body.about,
        last_login: req.body.last_login
            // status:req.body.status
    };

    // res.json(req.body);

    //console.log(info);

    db.user.update(req.body, {
        where:{
            id: req.body.userID
        }
    })
        .then(function(data) {
            console.log(data);
            res.status(200).json({ status: 'ok' });

        })
        .catch(function(err) {
            console.log(err);
            res.json({ message: "Something went wrong, either the user already created with that username" });
        });
});

// Profile page for Students
// If user not logged in, they're not able to see it
router.post("/api/profile", function(req, res) {
    //console.log(req.params);
    console.log(req.body);
     db.user.findOne({
         where:{
             id:req.body.userID
         }
     })
         .then(function (data) {
             var info = {
                 title:data.title,
                 firstname: data.firstname,
                 lastname: data.lastname,
                 job: data.job,
                 email: data.email,
                 phoneNumber: data.phoneNumber
             }

             res.json(info);
         })
         .catch(function (err) {
             console.log(err);

             res.json("Nothing")
         });

});

router.post('/upload', function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
        cloudinary.v2.uploader.upload(
            files.fileUploaded.path, {
                use_filename: true,
                transformation: {
                    width: 250, height: 300, crop: "thumb", radius: 20,
                },
                eager: {
                    width: 250, height: 300, crop: "thumb", gravity: "face",
                }
            }, 
        function(error, result) {
            console.log(result); 
            var profileUpdate = {
                photo: result.public_id,
            };

            // db.user.update(profileUpdate, {
            //     where: {
            //         id: currentUser.id
            //     }
            // }).then(function(data) {
            //     console.log("Data has successfully beeen updated!!", data);
            //     res.redirect("/profile");
            // }).catch(function(err) {
            //     console.log(err);
            //     res.json("err");
            // });
        }).then(function(data) {
            location.href = '/profile'
        }); 
    });
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

module.exports = router;
