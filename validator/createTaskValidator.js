const {body} = require("express-validator");

const createTaskValidator = [
    body("task","task can't be empty").notEmpty().isString(),
    body("task").trim()
]

module.exports = createTaskValidator;