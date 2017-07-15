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
    cloudinary = require('cloudinary');
    axios = require("axios");


router.get("/event/data", function (req, res, next) {
    var group = []


    axios.get("https://api.meetup.com/find/groups?page=20&text=JavaScript&key=6b6f260644b44657a442955d383013&sig_id=197617558&sig=8742e95d91419cc26b093bd4070f2beba7415bf3")
        .then(function (data) {
            console.log(data);
            group = data;

            var jsn = JSON.stringify(data);

        })
        .catch(function (er) {
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
})

router.post("/cohorts", function(req, res) {
    db.cohort.findAll({
        where: {
            bootcampId: req.body.bootcampId
        }
    }).then(function(cohorts) {
        res.json(cohorts);
    })
})


router.post("/sign-up", function(req, res) {
    console.log(req.body);
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            console.log(err);
        } else {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                if (err) throw err;

                db.user.create({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        username: req.body.username,
                        password: hash,
                        bootcampId: req.body.bootcampId,
                        cohortId: req.body.cohortId
                    })
                    .then(function(data) {
                        console.log(data);
                        res.status(200).send({ message: 'User added to database' });
                    })
                    .catch(function(err) {
                        console.log(err);
                        res.json({ message: "Something went wrong, either the user already created with that username" });
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


router.post("/profile", function(req, res) {
   // console.log(req.body);
    var info = {
        email:req.body.email,
        phoneNumber: req.body.phoneNumber,
        github: req.body.github,
        about: req.body.about,
        last_login: req.body.last_login
        // status:req.body.status
    };

    console.log(info);

    db.user.create(info)
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
router.get("/api/profile", function(req, res) {
    var currentUser = req.user;
    user = currentUser;
    console.log(user);

    db.bootcamp.findOne({
        where: {
            id: currentUser.id
        }
    }).then(function(data) {
        console.log(data);
        // console.log(data.get());
        // currentUser.institution = data.get().institution;
        //console.log(currentUser);
        console.log(currentUser);
        // console.log(req.user);
        res.render("profile", currentUser);
    });

});

router.post('/upload', function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
        cloudinary.v2.uploader.upload(
            files.fileUploaded.path,
            {   
                use_filename: true,
                transformation: {
                    width: 250, height: 300, crop: "thumb",
            },
                eager: {
                    width: 250, height: 300, crop: "thumb", gravity: "face"
            }
            }, 
        function(result) {

            console.log(result); 
        }).then(function(data) {
            res.redirect("/profile");
        });
        // var profileUpdate = {
        //     photo: files.fileUploaded.name
        // };

        // db.user.update(profileUpdate, {
        //             where: {
        //             id: req.user.id
        //         }
        //     }).then(function(data) {
        //         conso le.log("Data has successfully beeen updated!!", data);
        //         res.redirect("/profile");
        //     }).catch(function(err) {
        //         console.log(err);
        //         res.json("err");
        // });
        
    });
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});

module.exports = router;
