const express = require('express');

const cors = require('cors');
const { connectdb } = require('./db');
const AuthRouter = require('./Routes/Auth/AuthRouter');
const ProductRouter = require('./Routes/Product/ProductRoute');
// const userRoutes=require('./Routes/userRoutes')
// const adminOrderRoutes = require('./Routes/adminOrderRoutes');
// const adminProductsRoutes = require('./Routes/adminProductsRoutes');
// const cartItemRoutes=require('./Routes/cartItemRoutes');
// const cartRoutes = require('./Routes/cartRoutes');
// const orderRoutes = require('./Routes/orderRoutes');
// const productRoutes = require('./Routes/productRoutes');
// const ratingRoutes = require('./Routes/ratingRoutes');
// const reviewRoutes = require('./Routes/reviewRoutes');
// const paymentRoutes = require('./Routes/paymentRoutes')


const app=express();
app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{res.send("hellojj")});
app.use("/api/v1/auth",AuthRouter);
app.use("/api/v1/product",ProductRouter);
// app.use("/api/v1/user",userRoutes);
// app.use("/api/v1/products",productRoutes);
// app.use("/api/v1/admin/products",adminProductsRoutes);
// app.use("/api/v1/order",orderRoutes);
// app.use("/api/v1/admin/order",adminOrderRoutes);
// console.log("index cart")
// app.use("/api/v1/cart",cartRoutes);
// app.use("/api/v1/cart/item",cartItemRoutes);
// app.use("/api/v1/review",reviewRoutes);
// app.use("/api/v1/rating",ratingRoutes);
// app.use("/api/v1/payment",paymentRoutes);

app.listen(3001,async()=>{
    await connectdb();
    console.log("server started")
})