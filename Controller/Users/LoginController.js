const UserModel = require('../../Models/User/User');
const jwtProvider = require('../../jwtProvider');
const bcrypt = require('bcrypt');

const LoginController = async(req,res)=>{
    try {
        const {password,email} = req.body;
        const user = await UserModel.findOne({email: email});
        if(!user)
        {
            res.status(404).send({
                message:"User Not Exist",
                status:false,
            })
       }
       const isPasswordValid = await bcrypt.compare(password,user.password);
       if(!isPasswordValid)
        {
            res.status(401).send({
                message:"Please Check your Credentials",
                status:false,
            })
        }
        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).send({
            jwt,
            message:"Login Success",
            success:true,
        })
    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports = LoginController;