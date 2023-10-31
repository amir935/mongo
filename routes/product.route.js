
const express = require('express')

const router = express.Router();

const Product =   require('../model/product.model')

router.get('/',async(req,res,next)=>{
    try {
        const products = Product.find({});

        res.json(products)    }
        catch (error) {
        console.log(error)
    }
})

router.post('/', async(req,res,next)=>{

try {

    const product =  new Product(req.body);

    const result = await product.save();

    res.json(result);
    
} catch (error) {
    console.log(error)
}
 
    
})


module.exports= router