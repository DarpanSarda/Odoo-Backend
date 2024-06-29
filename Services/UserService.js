const UserModel = require('../Models/User/User')
const bcrypt = require('bcrypt')
const jwtProvider = require('../jwtProvider')


const findUserById=async(userid)=>{
    try {
        const user = await UserModel.findById(userid)//.populate("addresses");

        if(!user)
        {
            throw new Error("user not found")
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}



const getUserProfileByToken = async(token)=>{
    try {
        const userId = jwtProvider.getUserIdfromtoken(token)

        const user = await findUserById(userId);

        if(!user)
        {
            throw new Error("user not found")
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}



module.exports = {findUserById,getUserProfileByToken};