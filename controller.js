const createTaskProvider = require("./provider/createTaskprovider.js");
const getTaskProvider = require("./provider/getTaskprovider.js");
const updateTaskProvider = require("./provider/putTaskprovider.js")
const deleteTaskProvider = require("./provider/deleteTaskprovider.js");
async function createTask(req,res){
    return await createTaskProvider(req,res)
}

async function getTask(req,res){
    return await getTaskProvider(req,res);
}
async function updateTask(req,res){
    return await updateTaskProvider(req,res);
}
async function deleteTask(req,res){
    return await deleteTaskProvider(req,res);
}
module.exports = {
 createTask,
getTask,
updateTaskProvider,
deleteTask

}
   

