import express from "express";
import mongoose from "mongoose";
import User from "./models/UserModel.js";


const app = express();
const port = 3000;

app.use(express.json());
app.get('/', async(req,res) => {

  const getuser = await User.find()
  res.json(getuser)
})
app.post('/',async(req,res) => {
    const {name,email,pass}=req.body
const Ptuser = new User({ 
    name,email,pass

});
 
const newData = await Ptuser.save();
res.status(201).json(newData);

})

app.put('/:id', async(req,res) => {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id,req.body)
if (user) {
    const updateuser = await  User.findById(id);
    res.json(updateuser);
}
})
  
app.delete('/:id', async(req,res) => {
    const {id} = req.params
    const user = await User.findByIdAndDelete(id,req.body)
    res.json({message:'successful deleted'});

})






app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})
mongoose.connect('mongodb+srv://maymaa14:maymaa1234567@cluster0.alfxzos.mongodb.net/Users?retryWrites=true&w=majority')
.then(() =>{
    console.log("connect database")
}).catch((error) =>{
   console.log(error)
})
