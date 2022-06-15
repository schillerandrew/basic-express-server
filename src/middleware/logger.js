'use strict';

function logger(req, res, next) {
    console.log(`REQUEST: ${req.method}, ${req.originalURL}`);
    next();
}

module.exports = logger;
