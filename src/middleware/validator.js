/* eslint-disable indent */
'use strict';

function validator(req, res, next) {
    let { name } = req.query;
    if (!name) {
        next('Please enter a name query parameter like this: /person?name=Andrew');
    } else {
        console.log('name:', name);
    }
    next();
}

module.exports = validator;
