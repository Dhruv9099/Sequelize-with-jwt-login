// const bcrypt = require('bcryptjs');

// const mockUsers = [
//   {
//     id: 1,
//     username: 'testuser',
//     email: 'test@example.com',
//     password: bcrypt.hashSync('password', 10),
//   },
// ];

// const User = {
//   create: jest.fn().mockImplementation(async (user) => ({
//     ...user,
//     id: mockUsers.length + 1,
//   })),
//   findOne: jest.fn().mockImplementation(async ({ where: { email } }) =>
//     mockUsers.find(user => user.email === email) || null
//   ),
// };

// module.exports = User;
// --------------------

// const User = {
//   create: jest.fn(),
//   findOne: jest.fn(),
// };

// module.exports = User;

// --------------------



// --------------------

const User = {
  create: jest.fn(() => Promise.resolve()),
  findOne: jest.fn(() => Promise.resolve()),
};

module.exports = User;

// --------------------
