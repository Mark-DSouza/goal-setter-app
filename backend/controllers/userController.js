// @desc    Register User
// @route   /api/v1/users
// @access  Public
const registerUser = (req, res) => {
	res.status(200).json({
		message: 'Register User',
	});
};

// @desc    Login User
// @route   /api/v1/users/login
// @access  Public
const loginUser = (req, res) => {
	res.status(200).json({
		message: 'Login User',
	});
};

// @desc    Get user data
// @route   /api/v1/users/me
// @access  Public
const getMe = (req, res) => {
	res.status(200).json({
		message: 'Get user data',
	});
};

module.exports = {
	registerUser,
	loginUser,
	getMe,
};
