import mongoose from "mongoose";

const userSchame = mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },

    pass:{
        type:String,
        require:true
    }
})

const User = mongoose.model('user',userSchame);
export default User


