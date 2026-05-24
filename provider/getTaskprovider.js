const TodoModel = require("../Models/todomodel.js");
const {StatusCodes} = require("http-status-codes");

async function getTaskProvider(req,res){
  
 try{
   const task = await TodoModel.find();

    return res.status(StatusCodes.OK).json(task)
 }catch(error){
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
        reason: "unable to process your request at this moment, please try later."
    })

 }
}

module.exports = getTaskProvider;
