const jwtProvider = require("../jwtProvider.js")
const userService = require("../services/userService")
const authenticate = async(req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        console.log(token);
        if(!token)
        {
            return res.status(404).send({
                success:false,
                error:"Token Not Found...."
            })
        }

        const userId = await jwtProvider.getUserIdfromtoken(token);

        const user= await userService.findUserById(userId);
        req.user = user;
        console.log(user)
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:error.message,
        })
    }
    next();
}

module.exports = authenticate;