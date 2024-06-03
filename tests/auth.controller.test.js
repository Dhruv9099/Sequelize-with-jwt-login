const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const authController = require('../controller/auth.controller');
// const User = require('../models/user.model');

const db = require('../models');
const User = db.user;

// Mock the User model
// jest.mock('../__mocks__/user.model.js'); // This will use __mocks__/user.model.js
// jest.mock('../models');

const app = express();
app.use(bodyParser.json());

// Define the routes for testing
app.post('/api/auth/signup', authController.signup);
app.post('/api/auth/login', authController.login);

describe("test create route", () => {
    const updateTokenData = {
        username: 'user2',
        email: 'newuser2@example.com',
        password: 'password123',
    };

    test("Should have key data, status and message when created", async () => {

        // const mockUpdateToken = jest.fn(() => updateTokenData);
        // jest.spyOn(User, "create").mockImplementation(mockUpdateToken());

        const res = await request(app).post("/api/auth/signup").send(
            updateTokenData
        );
        expect(res.body).toHaveProperty("message");
        // expect(res.body).toHaveProperty("data");
        // expect(res.body).toHaveProperty("status");
        // expect(mockUpdateToken).toHaveBeenCalledTimes(1);
    });
});















// describe('Auth Controller', () => {
//     describe('POST /api/auth/signup', () => {
//         it('should register a new user', async () => {
//             const newUser = {
//                 username: 'newuser',
//                 email: 'newuser@example.com',
//                 password: 'password123',
//             };

//             User.create.mockResolvedValue({
//                 id: 1,
//                 username: newUser.username,
//                 email: newUser.email,
//             });

//             const response = await request(app)
//                 .post('/api/auth/signup')
//                 .send(newUser);

//             expect(response.status).toBe(201);
//             expect(response.body.message).toBe('User registered successfully!');
//             expect(User.create).toHaveBeenCalledWith({
//                 username: newUser.username,
//                 email: newUser.email,
//                 password: expect.any(String), // since the password will be hashed
//             });
//         });

//         it('should handle errors during registration', async () => {
//             User.create.mockImplementationOnce(() => {
//                 throw new Error('Database error');
//             });

//             const newUser = {
//                 username: 'newuser',
//                 email: 'newuser@example.com',
//                 password: 'password123',
//             };

//             const response = await request(app)
//                 .post('/api/auth/signup')
//                 .send(newUser);

//             expect(response.status).toBe(500);
//             expect(response.body.message).toBe('Database error');
//         });
//     });

//     describe('POST /api/auth/login', () => {
//         it('should login an existing user', async () => {
//             const existingUser = {
//                 email: 'test@example.com',
//                 password: 'password123',
//             };

//             User.findOne.mockResolvedValue({
//                 id: 1,
//                 username: 'testuser',
//                 email: existingUser.email,
//                 password: 'hashedpassword123', // Mocked hashed password
//             });

//             const response = await request(app)
//                 .post('/api/auth/login')
//                 .send(existingUser);

//             expect(response.status).toBe(200);
//             expect(response.body).toHaveProperty('token');
//             expect(User.findOne).toHaveBeenCalledWith({ where: { email: existingUser.email } });
//         });

//         it('should return 404 if user not found', async () => {
//             User.findOne.mockResolvedValue(null);

//             const nonExistingUser = {
//                 email: 'nonexistent@example.com',
//                 password: 'password',
//             };

//             const response = await request(app)
//                 .post('/api/auth/login')
//                 .send(nonExistingUser);

//             expect(response.status).toBe(404);
//             expect(response.body.message).toBe('User not found');
//         });

//         it('should return 401 if password is invalid', async () => {
//             User.findOne.mockResolvedValue({
//                 id: 1,
//                 username: 'testuser',
//                 email: 'test@example.com',
//                 password: 'hashedpassword123', // Mocked hashed password
//             });

//             const invalidPasswordUser = {
//                 email: 'test@example.com',
//                 password: 'wrongpassword',
//             };

//             const response = await request(app)
//                 .post('/api/auth/login')
//                 .send(invalidPasswordUser);

//             expect(response.status).toBe(401);
//             expect(response.body.message).toBe('Invalid password');
//         });
//     });
// });
