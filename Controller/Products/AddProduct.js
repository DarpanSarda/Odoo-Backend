const CategoryModel = require("../../Models/Categories/Category");
const ProductModel = require("../../Models/Products/Product");

const CreateProduct = async(req,res)=>{
    console.log(req.body);
    try {
        let TopLevel = await CategoryModel.findOne({name:req.body.topLevelCategory});
        if(!TopLevel)
        {
            TopLevel = new CategoryModel({
            name:req.body.topLevelCategory,
            parentCategory:null,
            level:1,
            })
            await TopLevel.save();
        }
        console.log(TopLevel)
        let secondlevel = await CategoryModel.findOne({
            name:req.body.secondLevelCategory,
            parentCategory: TopLevel._id,
        })
        if(secondlevel === null)
        {
            secondlevel = new CategoryModel({
            name:req.body.secondLevelCategory,
            parentCategory:TopLevel._id,
            level:2,
        })
        await secondlevel.save();
        }
        console.log(secondlevel)
        const product = new ProductModel({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            renter:req.body.renter,
            brand:req.body.brand,
            color:req.body.color,
            ImageUrl:req.body.ImageUrl,
            Dimensions:req.body.dimension,
            category:secondlevel._id,
        })
        const pro = await product.save();
        return res.status(200).send(pro);
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports=CreateProduct;