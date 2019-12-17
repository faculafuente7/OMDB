const express = require('express');
const router = new express.Router();
const Favorites = require('../db/models/favorites')


router.get('/', (req, res) => {

    const userId = req.user.dataValues.id

    Favorites.findAll({
        where: {
            userId: userId
        }
    })
        .then(movies => {
            res.send(movies)
        })
});

router.post('/', function (req, res) {

    const userId = req.user.dataValues.id

    const movie = {
        imdbId: req.body.imdbID,
        title: req.body.Title,
        urlImage: req.body.Poster
    }

    Favorites.findAll({
        where: {
            userId: userId
        }
    }).then(res => {
        let movies = []
        res.map(e => {
            movies.push(e.dataValues.imdbId)
        })
        if (movies.includes(movie.imdbId)) {
            res.send("LA PELI YA ESTA EN FAVORITOS PERRO")
        } else {
            Favorites.create(movie)
                .then(movie => {
                    req.user.addFavorite(movie)
                })
        }
    })
});



module.exports = router;
