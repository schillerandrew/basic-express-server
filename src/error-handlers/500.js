'use strict';

function error500Handler (err, req, res, next) {
    const error = err.message ? err.message : err;
    res.status(500).send(error);
}

module.exports = error500Handler;
