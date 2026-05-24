const { StatusCodes } = require("http-status-codes");
const TodoModel = require("../Models/todomodel.js");
const {} = require("express-validator");

async function deleteTaskProvider(req,res){
    const {id} = req.params;
    try{
        const task = await TodoModel.findByIdAndDelete({_id: id} )

        return res.status(StatusCodes.OK).json(task);
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({reason: "unable to process at this moment, please try later"})

    }

}
module.exports = deleteTaskProvider;
