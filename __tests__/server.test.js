'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server);

describe('Server Testing', () => {
    describe('Error Handler Testing', () => {
        test('404 on a bad route', async() => {
            let response = await request.get('/fake');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
        test('404 on a bad server request', async() => {
            let response = await request.put('/hello');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
    });
    describe('GET/Read routes Testing', () => {
        test('/person route failing because no query parameter', async() => {
            let response = await request.get('/person');
            expect(response.status).toEqual(500);
            // expect(response.text).toEqual('Hello');
        });
        test('/person route working with a query parameter', async() => {
            let response = await request.get('/person?name=Andrew');
            expect(response.status).toEqual(200);
            expect(response.text).toEqual('Hi Andrew');
        });
        test('/person route working with URL/path parameter', async() => {
            let response = await request.get('/person/Andrew');
            expect(response.status).toEqual(200);
            expect(response.text).toEqual('Hello Andrew');
        });
    });
});
