export const getUser = async(req,res) => {

    const getuser = await User.find()
    res.json(getuser)
  };

  export const posUser = async(req,res) => {
    const {name,email,pass}=req.body

    
const Ptuser = new User({ 
    name,email,pass

});
const exit = await User.findOne({email})
if (exit) {
    res.json({messgae: "exists"});
}else{
    const newData = await Ptuser.save();
res.status(201).json(newData);

}

 

}

export const Ptuser = async(req,res) => {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id,req.body)
if (user) {
    const updateuser = await  User.findById(id);
    res.json(updateuser);
}
}

export const delUser = async(req,res) => {
    const {id} = req.params
    const user = await User.findByIdAndDelete(id,req.body)
    res.json({message:'successful deleted'});

}
