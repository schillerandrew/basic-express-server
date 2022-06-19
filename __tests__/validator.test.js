'use strict';

const { server } = require('../src/middleware/validator.js');
const supertest = require('supertest');
const request = supertest(server);

