import app from './server';
import supertest from "supertest";


describe('Get(/)',()=>{
    it('should send welcoming message',async()=>{
        const res = await supertest(app).get("/")
       
        expect(res.status).toEqual(200);
        expect(res.body.message).toBe('hello from express');

    });
})