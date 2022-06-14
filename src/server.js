'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;

function startServer () {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {
  app,
  startServer
}