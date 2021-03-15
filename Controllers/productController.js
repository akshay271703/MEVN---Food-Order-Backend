const express = require('express')
const router = express.Router()

const Product = require('../Models/Products.js')

module.exports.product_add = async(req,res)=>{
    const { id, name, quantity, price, image} = req.body
    try{
        let newProduct = await Product.create( { id, name, quantity, price, image} )
        res.send(newProduct) 
    }catch(err){
        res.status(404).json({ err })
    }
}
module.exports.product_update = async(req,res)=>{
    const id = req.params.id
    const { name, quantity, price, image} = req.body
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, { name,quantity, price, image })
        res.send(updatedProduct._id)
    }catch(err){
        res.status(404).json({err})
    }
}

module.exports.product_buy = async(req,res)=>{
    const id = req.params.id
    const {quantity} = req.body
    try{
        const oldProduct = await Product.findById(id)
        console.log(oldProduct)
        oldProduct.quantity = oldProduct.quantity - quantity
        await oldProduct.save()
    }catch(err){
        res.status(404).json({err})
    }
}

module.exports.product_delete = async(req,res)=>{
    const deletedProduct = await Product.findByIdAndRemove(req.params.id)
    if(deletedProduct){
        res.send(deletedProduct)
    }else{
        res.status(404).json({ msg : 'Cannot Find Product'})
    }
}

module.exports.products_fetch = async(req,res)=>{
    try{
        const products = await Product.find({})
        res.send(products)
    }catch(err){
        res.status(404).json({err})
    }
}

module.exports.product_fetch_one = async(req,res)=>{
    Product.findOne(req.body.id)
        .then(result=>{
            res.send(result)
        })
        .catch(err=>{
            res.status(404).json(err)
        })
}