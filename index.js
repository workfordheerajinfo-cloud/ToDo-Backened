const express= require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const TodoModel = require("./Models/todomodel.js");
const taskRouter = require("./router.js");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envfile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envfile });

const app= express();
const port = parseInt(process.env.PORT);

console.log(process.env.NODE_ENV)

app.use(cors());
app.use(express.json());  // it means whenever we pass the data that will be converted to the json(javaScript object Notation)
app.use("/", taskRouter)

async function bootstrap(){
    try{
        await mongoose.connect(process.env.DATABASE_URL,{dbName: process.env.DATABASE_NAME})
        console.log("connected to mongoDB");
        app.listen(port,()=>{
      console.log(`Server is running on port ${port}`)
})
    } catch(error){
        console.log(error);

    }
}
bootstrap();





