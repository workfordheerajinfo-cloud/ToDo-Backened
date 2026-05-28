const {StatusCodes} = require("http-status-codes");

const TodoModel = require("../Models/todomodel.js");

async function deleteAllTaskProvider(req,res){
    
    try{
        const task = await TodoModel.deleteMany()
        res.status(StatusCodes.OK).json(task);
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({reason: "Unable to process at this moment, please try later" })

    }
}

module.exports = deleteAllTaskProvider;