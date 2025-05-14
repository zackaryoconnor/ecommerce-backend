const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    imageURL        : { type: [String], default: [] },
    type            : { type: String, required: true },
    price           : { type: String, required: true },
    description     : { type: String, required: true },
    dimensions: {
        height      : String,
        width       : String,
        strapDrop   : String,
        gussetDepth : String,
        description : String
    },
    materialsAndCare: String,
    shipping        : String,
    returns         : String
})


const Product = mongoose.model('Product', productSchema)
module.exports = Product