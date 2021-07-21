import App from "../../app";
const supertest = require('supertest')
import {getConnection} from "typeorm";
let request

beforeAll( async () => {
    await App().then(async (app) => { 
        request = await supertest(app)
    });
})

afterAll( async () => {
    const connection = getConnection();
    await connection.close();
})

describe('GET /product', () => {
    it('gets the test endpoint', (done) => {
    request.get('/product')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err) => {
          if (err) return done(err)
          done()
        })
    })
})

describe('GET /product/500', () => {
    it('gets the test endpoint', (done) => {
    request.get('/product/1')
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err) => {
          if (err) return done(err)
          done()
        })
    })
})