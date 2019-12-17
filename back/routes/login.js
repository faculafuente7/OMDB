const express = require('express');
const router = new express.Router();
const User = require('../db/models/users')
const passport = require('../config/passport');

router.post('/', (req, res) => {
    passport.authenticate('local', function (err, user, info) {
        if (!user) {
            return res.send(false)
        }
        else {
            req.logIn(user, function (err) {
                if (err) {
                    return res.send(false)
                }
                return res.send(user)
            })
        }
    })(req, res)
})


module.exports = router;
