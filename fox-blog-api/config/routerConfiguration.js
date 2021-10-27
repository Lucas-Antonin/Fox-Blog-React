'use strict';

/**
 * Routes configuration imports
 */
const userRoutes =  require('../app/routes/userRoutes');


/**
 * router bindings configuration
 */
module.exports.routerConfiguration = (app) => {
    app.use('/', userRoutes);
};