const ProductModel = require("../../Models/Products/Product")

const findProductById = async (req,res)=>{
    console.log(req.params.id)
    try {
        const product= await ProductModel.findById(req.params.id).populate("category").exec();
        if(!product)
        {
            return res.status(500).send({
                success:false,
                error:"Product Not Found"
            })  
        }
        return res.status(500).send({
            success:true,
            product:product
        })        
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }

}
module.exports = findProductById