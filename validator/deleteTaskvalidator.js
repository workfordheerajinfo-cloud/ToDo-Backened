const { param } = require('express-validator');

const deleteTaskValidator = [
	param('id')
		.exists().withMessage('Task id is required')
		.isMongoId().withMessage('Invalid task id'),
];

module.exports = deleteTaskValidator;