const { json } = require('body-parser')
const User     = require('../Models/User.js')
module.exports.signup_post = async (req,res)=>{
    const { email , password } = req.body
    try{
       const user =  await User.create({ email, password })
       res.send({user : user._id, email : user.email})
    }catch(err) {
        res.status(404).json(err)
    }
}

module.exports.login_post = async (req,res)=>{
    const { email, password } = req.body
    try{
        const user = await User.login(email,password)
        res.send({user : user._id, email : user.email})
    }catch(err){
        res.status(404).json({err : err.message})
    }
}