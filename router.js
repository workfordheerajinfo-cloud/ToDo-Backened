const express = require("express");
const {validationResult} = require("express-validator");
const taskController = require("./controller.js");

const createTaskValidator = require("./validator/createTaskValidator.js");
const {StatusCodes} = require("http-status-codes");
const getTasksValidator = require("./validator/getTaskValidator.js");
const updateTaskValidator = require("./validator/updateTaskValidator.js");
const deleteTaskValidator = require("./validator/deleteTaskvalidator.js");

const taskRouter = express.Router();

taskRouter.post("/add", createTaskValidator,(req,res)=>{
    const result = validationResult(req);

    if(result.isEmpty()){
       return taskController.createTask(req,res)
    }
    else{
       return res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
})

taskRouter.get("/get",getTasksValidator,(req,res)=>{
 const result = validationResult(req);

 if(result.isEmpty()){
   return taskController.getTask(req,res);
 }else{
   return res.status(StatusCodes.BAD_REQUEST).json(result.array());

 }
})
taskRouter.put("/update/:id",updateTaskValidator,(req,res)=>{
  const result = validationResult(req);
  
  if(result.isEmpty()){
    return taskController.updateTaskProvider(req,res)
  }else{
    return res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
})
taskRouter.delete("/delete/:id", deleteTaskValidator,(req,res)=>{
  const result = validationResult(req);

  if(result.isEmpty()){
    return taskController.deleteTask(req,res);
  }else{
   return res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
})

module.exports = taskRouter;




