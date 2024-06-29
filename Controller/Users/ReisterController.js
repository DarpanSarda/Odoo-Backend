const UserModel = require('../../Models/User/User');
const jwtProvider=require('../../jwtProvider');
const bcrypt = require('bcrypt');

const RegisterController = async(req,res)=>{
    console.log("hellosjchi")
    console.log(req.body)
    try {
        let{firstName, lastName, email,password} = req.body;

        const isExist = await UserModel.findOne({email:email});
        if(isExist)
        {
            res.status(400).send({
                message:"Email ALready Registered",
                success:false,
            })
        }

        password = await bcrypt.hash(password,8);

        const user = await UserModel.create({firstName,lastName,email,password})

        const jwt=jwtProvider.generateToken(user._id);

        //  await cartService.createCart(user);

        return res.status(200).send({
            jwt,
            message:"Register Success",
            success:true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports=RegisterController;