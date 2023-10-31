const mongoose = require('mongoose');

const schema = mongoose.Schema

const productSchema =  new schema({
    name: {
        type: String,
        require: true
    }
})

const Product =  mongoose.model('products', productSchema);

module.exports = Product;