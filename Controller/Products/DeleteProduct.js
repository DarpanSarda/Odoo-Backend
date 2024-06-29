const ProductModel = require("../../Models/Products/Product");

const deleteProduct = async(req,res)=>{
    const productId = req.params.id;
    try {
        const product = await ProductModel.findByIdandDelete(productId)
        
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports = deleteProduct;