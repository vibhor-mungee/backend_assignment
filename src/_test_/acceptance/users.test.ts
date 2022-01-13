import { createConnection } from "typeorm";
import * as request from 'supertest';
import app from "../../app";
import {PORT} from "../../config"
import {getRepository} from 'typeorm'
import { User } from "../../entity/user";

let response;
let Users:any;
const testUser:any ={
  name:"summi",
  phone:"1234567891",
  email: "summichauhan@gmail.com",
  password:"summi123"
}
const updateUser:any ={
  name:"aman",
  phone:"0123456789",
  email: "summichauhan@gmail.com",
  password:"summi123"
}

let connection, server ;

beforeAll(async() => {
  connection = await createConnection();
  await connection.synchronize();
  server = app.listen(PORT);
});


afterAll(() => {
  connection.close();
  server.close();
});



it('should create a user', async() => {
  response = await request(app).post('/createUser').send(testUser);
  expect(response.statusCode).toBe(200);
   console.log("user created with details:" ,response.body);
   
});

it('should not  create a user', async() => {
  response = await request(app).post('/createUser');
  
  expect(response.statusCode).toBe(200);
   console.log("message:" ,response.body);
   
});

it('should   display all users', async() => {
  response = await request(app).get('/getUsers');
  expect(response.statusCode).toBe(200);
  expect(response.body).not.toBeNull();;
  console.log("****All userswith deatils*** =",response.body);
  
});

it('should not  display all users', async() => {
  response = await request(app).get('/getUser');
  expect(response.statusCode).toBe(404); 
  console.log("should not  display all users",response.body);
     
});



it('should   display an  user with  id and phone number  ', async() => {
  const id =9;
  const phone = '1234567891'
  response = await request(app).get(`/getUsers/${id}/${phone}`);
  expect(response.statusCode).toBe(200); 
 
 console.log(`user get with id ${id} and phone${phone}`,response.body);
  
 });

it('should not  display an  user with invalid id and phone number  ', async() => {
  const id =10;
  const phone = '0126456789'
  response = await request(app).get(`/getUsers/${id}/${phone}`);
  expect(response.statusCode).toBe(200); 
   let err = { msg: 'Invalid value', param: 'id,phone', location: 'params'}
 console.log("should not  display an  user with invalid id and phone number :" ,response.body);
  
});

it('should   update an  user with  id and phone number  ', async() => {
  const id =20;
  const phone = '1234567891'
  response = await request(app).put(`/updateUser/${id}/${phone}`).send(updateUser);
  expect(response.statusCode).toBe(200); 
 
 console.log(`Response of get single user`,response.body);
  
});

it('should  not update an  user with  id and phone number  ', async() => {
  const id =10;
  const phone = '0023456789'
  response = await request(app).put(`/updateUser/${id}/${phone}`).send(updateUser);
  expect(response.statusCode).toBe(200); 
 
 console.log(response.body);
  
});


it('should   remove an  user with  id and phone number  ', async() => {
  const id =20;
  const phone = '0123456789'
  response = await request(app).delete(`/deleteUser/${id}/${phone}`);
  expect(response.statusCode).toBe(200); 
 
 console.log(`user remove with id ${id} and phone${phone}`,response.body);
  
});


it('should  not remove an  user with  invalid id and phone number ', async() => {
  const id =10;
  const phone = '0023456789'
  response = await request(app).delete(`/deleteUser/${id}/${phone}`);
  expect(response.statusCode).toBe(200); 
 
 console.log(response.body);
  
});