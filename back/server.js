const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('./config/passport')
const session = require('express-session')
const morgan = require('morgan')
const path = require('path')
const Users = require('./db/models/users')
const db = require('./db/db')
const DIST_DIR = path.join(__dirname, "../back/public");
const users = require('./routes/users')


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({
    secret: "omdb",
    resave: true,
    saveUninitialized: true
}))

/**** PASSPORT */
app.use(passport.initialize());
app.use(passport.session());


/********************* */

app.use(express.static(path.join(__dirname, "../back/public")))

app.use('/api', require('./routes'));
app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../back/public", "index.html"))

}

);

app.use("*", express.static(DIST_DIR))


db.sync({ force: false }).then(() => {
    app.listen(3001, () => {
        console.log("Escuchando en el puerto 3001")
    })
})
