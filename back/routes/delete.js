const express = require('express');
const router = new express.Router();
const Favorites = require('../db/models/favorites')


router.post('/', function (req, res) {
    Favorites.destroy({ where: { imdbId: req.body.imdbId, userId: req.body.userId } })
        .then(() => {
            res.send("MOVIE DELETED")
        })
})


module.exports = router;
