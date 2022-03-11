const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('./../models/userModel');

const protect = async (req, res, next) => {
	let token;

	if (
		req.header.authorization &&
		req.header.authorization.startsWith('Bearer')
	) {
		try {
			// Get token from header
			token = req.header.authorization.split(' ')[1];

			// Verify token
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			// Get user from token
			req.user = await User.findById(decoded.id).select('-password');

			next();
		} catch (error) {
			console.log(error);
			res.status(401);
			throw new Error('Not Authorized');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not Authorized, no token');
	}
};

module.exports = { protect };
