// tests/auth.test.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('../routes/auth.routes');
const db = require('../models');
const bcrypt = require('bcryptjs');
const User = db.users;

const app = express();
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
  // await db.sequelize.sync();
});

afterAll(async () => {
  await db.sequelize.close();
});
describe('Auth API', () => {
  
  test('should sign up a new user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123'
      });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('message', 'User registered successfully!');
  });

  test('should log in an existing user', async () => {

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123'
      });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('accessToken');
  });

  test('should not log in with wrong password', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser2@example.com',
        password: 'wrongpassword'
      });
      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'User not found.');
  });

  test('should not log in with non-existent email', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'nonexistent@example.com',
        password: 'password123'
      });
      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'User not found.');
  });
});
