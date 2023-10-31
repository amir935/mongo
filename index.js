const express = require('express');
const productRoute =  require('./routes/product.route');
const { mongoose } = require('mongoose');


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



app.use('/product', productRoute);

app.use((req,res,next)=>{

    
    const err = new Error("Method not allowed");

    err.status = 405


    next(err);
    next(new Error("can't get"))
   
   
})

app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.use((err,req,res,next)=>{
  

     res.status(err.status || 500)
         res.send({
            error: {
                status: err.status,
                message: err.message
            }
         });
});



mongoose.connect('mongodb+srv://amir2mohammed12:XytJl1xtgLhXeTPL@lms.mtahgxf.mongodb.net/practice').then(()=>{
    console.log("mongo db connected");
})

app.listen(3000, ()=>{
    console.log('server is listening on port 3000');
})