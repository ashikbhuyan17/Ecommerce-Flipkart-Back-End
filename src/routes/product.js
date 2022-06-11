const express = require('express')
const { requireSignIn, adminMiddleware } = require('../common-middleware')
const router = express.Router()
const Product = require('../models/products')

router.post('/product/create', requireSignIn, adminMiddleware, (req, res) => {
    res.status(200).json({ message: "hello" })
})
// router.get('/category/getCategory', getCategories)

module.exports = router
