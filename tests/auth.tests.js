const request = require('supertest');
const app = require('../app'); // Assuming your Express app is in app.js

// Mock the database module
jest.mock('../models/user.model', () => ({
    create: jest.fn(),
    findOne: jest.fn(),
}));

const User = require('../models/user.model'); // Import the mocked module


describe('Authentication API', () => {
    test('should sign up a new user', async () => {
        // Mock User.create function
        User.create.mockResolvedValueOnce({
            id: 1,
            username: 'testuser',
            email: 'testuser@example.com',
        });

        // Make a request to your signup endpoint
        const res = await request(app)
            .post('/api/auth/signup')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'password123',
            });

        // Assert the response
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'User registered successfully!');
        expect(res.body.user).toHaveProperty('username', 'testuser');
        expect(res.body.user).toHaveProperty('email', 'testuser@example.com');

        // Assert that User.create was called with the correct arguments
        expect(User.create).toHaveBeenCalledWith({
            username: 'testuser',
            email: 'testuser@example.com',
            password: 'password123',
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
      });
});
