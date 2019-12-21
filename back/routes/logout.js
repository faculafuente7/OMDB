const express = require('express');
const router = new express.Router();
const User = require('../db/models/users')
const passport = require('../config/passport');

router.get('/', (req, res) => {
    console.log('ESTOY HACIENDO EL LOGOUT')
    req.logOut()
    res.send('chau')
})

module.exports = router;