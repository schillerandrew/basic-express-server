/* eslint-disable indent */
'use strict';

let logger = require('../src/middleware/logger.js');

describe('Test Logger Middleware', () => {
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('Properly logging output', () => {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    });
    test('Properly calling next()', () => {
        logger(req, res, next);
        expect(next).toHaveBeenCalledWith();
    });
});
