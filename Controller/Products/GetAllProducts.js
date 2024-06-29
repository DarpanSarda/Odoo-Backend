const ProductModel = require("../../Models/Products/Product");

const getAllProducts=async (req,res)=>{
    let{category,minPrice,maxPrice,sort,stock,pageNumber,pageSize}=req.query;

    pageSize= pageSize || 10;

    let query = ProductModel.find().populate("category");

    if(category)
    {
        const existCategory = await CategoryModel.findOne({name:category});
        if(existCategory){
            query=query.where("category").equals(existCategory._id);
        }
        else
        {
            return{content:[],currentPage:1,totalPages:0}
        }
    }

    if(minPrice && maxPrice)
    {
        query=query.where('discountedPrice').gte(minPrice).lte(maxPrice);
    }
    if(stock)
    {
        if(stock="in_stock")
        {
            query=query.where("quantity").gt(0)
        }

        else if(stock="out_stock")
        {
            query=query.where("quantity").lt(1)
        }
    }
    if(sort)
    {
        const sortDirection = (sort==="price_height"?-1:1);
        query=query.sort({discountedPrice:sortDirection})
    }

    const totalProducts = await ProductModel.countDocuments(query);
    const skip = (pageNumber-1)*pageSize;
    const products=await query.exec();
    const totalPages=Math.ceil(totalProducts/pageSize);
    console.log(products)
    return res.send({content:products, currentPage:pageNumber,totalPages})
}

module.exports = getAllProducts;