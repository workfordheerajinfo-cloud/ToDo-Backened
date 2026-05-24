const {body} = require("express-validator");

const updateTaskValidator = [
    body('task')
        .optional()
        .isString().withMessage('Task must be a string')
        .notEmpty().withMessage('Task cannot be empty'),
    body('done')
        .optional()
        .isBoolean().withMessage('Done must be a boolean'),

]

module.exports = updateTaskValidator;