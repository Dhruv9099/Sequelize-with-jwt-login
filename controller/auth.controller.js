const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../models');
const User = db.user;

// Signup function
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username or email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send({ message: "Email is already registered." });
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Save user to database
    const user = await User.create({ username, email, password: hashedPassword });

    res.status(201).send({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};




// Login function
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // Check password
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ accessToken: null, message: "Invalid Password!" });
    }

    // Sign JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken: token
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


// all SignUpUser
exports.AllSignUpUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send({ users });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
