const TodoModel = require("../Models/todomodel.js");
const { StatusCodes } = require("http-status-codes");

async function updateTaskProvider(req, res) {
    const {id} = req.params
    try {
        const task = await TodoModel.findByIdAndUpdate(
            id,{ done:true }, // You can change this to req.body for dynamic updates
            { returnDocument: "after" }
        );
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        return res.status(200).json(task);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ reason: "Unable to process at this moment, please try later" });
    }
}

module.exports = updateTaskProvider;