'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('./src/configurations/mongo-configuration.js');
const configuration = require('./src/configurations/properties-configuration.js');
const serverConfiguration = configuration.get('Cars.server');
const templateEngines = require('consolidate');

// Create express application
const app = express();

// Templating engine configuration
app.set('views', __dirname.concat('/src/views'));
app.set('view engine', 'html');
app.set("view options", { layout: true });
app.engine('.html', templateEngines.handlebars);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
require('./src/routes/index.js')(app);

// MongoDB
mongo.connect(() => {
  // Get port from environment / configuration properties
  const bindsToAllAddresses = serverConfiguration.bindsToAllAddresses || false;
  const host = bindsToAllAddresses ? '0.0.0.0' : serverConfiguration.host || '127.0.0.1';
  const port = process.env.PORT || serverConfiguration.port || '3000';

  // Create HTTP server
  const server = http.createServer(app);

  // Listen on provided port, on the network interface configured
  server.listen(port, host, () => console.log(`Server is running on ${host}:${port}`));
});
