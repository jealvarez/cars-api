'use strict';

const carRoutes = require('../routes/cars-routes.js');
const indexRoutes = require('../routes/index-routes.js');

module.exports = (application) => {
  application.use('/', indexRoutes);
  application.use('/v1/cars', carRoutes);
};
