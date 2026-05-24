const {Schema,model}= require("mongoose");

const TodoSchema = new Schema({
    task: String,
    done:{
        type: Boolean,
        default: false

    }
})

const TodoModel = model("todos", TodoSchema)

module.exports = TodoModel;



