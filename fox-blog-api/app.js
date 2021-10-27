/**
 * Setup env loading with priority
 */
require('dotenv').config();

/**
* Load base application dependencies
*/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { routerConfiguration } = require('./config/routerConfiguration');
const path = require("path");
const database = require("./config/databaseConfiguration");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");

/**
 * Setup base view engine to be used in the application
 */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

/**
 * Setup database connection
 */
database.authenticate().then().catch((err) => {
    console.log(err)
});

/**
 * Setup request body related stuff
 */
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(compression());
app.use(cookieParser());
app.use(cors());

/**
 * Setup base application request router
 */
routerConfiguration(app);

module.exports = app;