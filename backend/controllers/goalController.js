const asyncHandler = require('express-async-handler');

const Goal = require('./../models/goalModel');

// @desc    Get goals
// @route   /api/v1/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();
	res.status(200).json(goals);
});

// @desc    Set goals
// @route   /api/v1/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}
	res.status(200).json({
		message: 'Set goal',
	});
});

// @desc    Update goals
// @route   /api/v1/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
	console.log('This is using the formatter.');
	res.status(200).json({
		message: `Update goal ${req.params.id}`,
	});
});

// @desc    Delete goals
// @route   /api/v1/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: `Delete goal ${req.params.id}`,
	});
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
