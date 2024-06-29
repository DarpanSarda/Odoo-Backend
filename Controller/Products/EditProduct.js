const ProductModel = require("../../Models/Products/Product");

const updateProducts = async(req,res)=>{
    const productId = req.params.id;
    try {
        const product = ProductModel.findByIdandUpdate(productId,req);
        
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports = updateProducts;