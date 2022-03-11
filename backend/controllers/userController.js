const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('./../models/userModel');

// @desc    Register User
// @route   /api/v1/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error('Please add all fields');
	}

	// Check if user exists
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	// Hash Password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create User
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

// @desc    Login User
// @route   /api/v1/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: 'Login User',
	});
});

// @desc    Get user data
// @route   /api/v1/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: 'Get user data',
	});
});

module.exports = {
	registerUser,
	loginUser,
	getMe,
};
