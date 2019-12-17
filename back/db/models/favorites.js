const S = require('sequelize')
const User = require('./users')
const db = require('../db')

class Favorites extends S.Model { }
Favorites.init({
    imdbId: {
        type: S.STRING,

    },
    title: {
        type: S.STRING,

    },
    urlImage: {
        type: S.STRING
    }
}, { sequelize: db, modelName: 'favorites' })

module.exports = Favorites
