import express from "express";
import mongoose from "mongoose";
import User from "./models/UserModel.js";
import userRouter from './routes/userRouter.js'


const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/users', userRouter)

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
}),
mongoose.connect('mongodb+srv://maymaa14:maymaa1234567@cluster0.alfxzos.mongodb.net/Users?retryWrites=true&w=majority')
.then(() =>{
    console.log("connect database")
}).catch((error) =>{
   console.log(error)
})
