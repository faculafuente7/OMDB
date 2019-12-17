const express = require('express');
const router = new express.Router();
const User = require('../db/models/users')

module.exports = router;

router.post('/', function (req, res) {
    const user = {
        name: req.body.inputName,
        lastName: req.body.inputLastName,
        email: req.body.inputEmail,
        password: req.body.inputPassword
    }

    User.findAll()
        .then(data => {
            console.log("SOY LOS USERS", data)
            let users = [];
            data.map(user => {
                users.push(user.dataValues.email)
            })
            return users
        })
        .then(users => {
            if (users.includes(user.email)) {
                res.send("EL USUARIO YA EXISTE")
            } else {
                User.create(user)
                    .then(user => res.send(user))
            }
        });
});