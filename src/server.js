'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const error404Handler = require('./error-handlers/404.js');
const error500Handler = require('./error-handlers/500.js');
const app = express();

const PORT = process.env.PORT || 3002;

app.use(logger);

app.get('/person', validator, (req, res, next) => {
    let { name } = req.query;
    res.status(200).send(`Hi ${name}`);
});

app.get('/person/:name', (req, res, next) => {
    let { name } = req.params;
    res.status(200).send(`Hello ${name}`);
})

app.use('*', error404Handler);

app.use(error500Handler);

module.exports = {
  server: app,
  startServer: () => app.listen(PORT, () => console.log(`running on port ${PORT}`))
}
