const dotenv    = require('dotenv').config()
const express   = require('express')
const app       = express()
const mongoose  = require('mongoose')
const cors      = require('cors')
const Product   = require('./product.js')


app.use(cors())
app.use(express.json())


const port                  = '3000'
const productRoute          = '/product'
const productID             = 'id'
const productRouteWithID    = `${ productRoute }/:${ productID }`


mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${ mongoose.connection.name }`)
})




app.post(productRoute, async (request, response) => {
    response.json(await Product.create(request.body))
})




app.get(productRoute, async (request, response) => {
    response.json(await Product.find())
})
app.get(productRouteWithID, async (request, response) => {
    response.json(await Product.findById(request.params.productID))
})




app.put(productRouteWithID, async (request, response) => {
    response.json(await Product.findByIdAndUpdate(request.params.productID, request.body, { new: true }))
})




app.delete(productRouteWithID, async  (request, response) => {
    response.json(await Product.findByIdAndDelete(request.params.productID))
})




app.listen(port, () => {
    console.log(`running on ${ port }`)
})