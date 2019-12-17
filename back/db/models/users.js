const S = require('sequelize')
const db = require('../db')
const Favorites = require('./favorites')

const Crypto = require('crypto')

class User extends S.Model { }
User.init({
    name: {
        type: S.STRING,
        allowNull: false
    },
    lastName: {
        type: S.STRING,
        allowNull: false
    },
    email: {
        type: S.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: S.STRING,
        allowNull: false
    },
    salt: {
        type: S.STRING,
    }
}, { sequelize: db, modelName: 'user' })

User.beforeCreate((user) => {
    user.salt = Crypto.randomBytes(20).toString('hex');
    user.password = Crypto.createHmac('sha1', user.salt).update(user.password).digest('hex');
});
User.prototype.hashFunction = function (password) {
    return Crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};
User.prototype.authenticate = function (password) {
    return this.hashFunction(password) === this.password;
};

User.hasMany(Favorites, { as: 'favorites' })

module.exports = User