const express = require('express');
const router = new express.Router();
const User = require('../db/models/users')
const passport = require('../config/passport');

router.get('/', (req, res) => {
    req.logOut()
    res.send('chau')
})

module.exports = router;