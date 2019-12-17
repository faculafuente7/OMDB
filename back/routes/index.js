'use strict';
/* eslint-disable new-cap */

const router = require('express').Router();
const path = require("path");
const DIST_DIR = path.join(__dirname, "../public");
const HTML_FILE = path.join(DIST_DIR, "index.html");


router.use('/login', require('./login'));
router.use('/users', require('./users'));
router.use('/logout', require('./logout'));
router.use('/user', require('./me'));
router.use('/favorites', require('./favorites'))
router.use('/delete', require('./delete'))

router.get("/*", (req, res) => {
    res.sendFile(HTML_FILE);
});

// Make sure this is after all of
// the registered routes!
// router.use(function (req, res) {
//     res.status(404).end();
// });


module.exports = router;