const express = require('express');
const router = new express.Router();
const User = require('../db/models/users')
const passport = require('../config/passport');

router.get('/me', (req, res) => {

    res.send(req.user)

})

module.exports = router;
