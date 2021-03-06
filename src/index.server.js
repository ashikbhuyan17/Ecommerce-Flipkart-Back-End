const express = require('express');
const app = express();

// const env = require('dotenv');
// env.config()
// console.log(env.config());
require('dotenv').config();

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(express.json());

//routes
const authRoutes = require('./routes/auth');
const authAdminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');


app.use('/api', authRoutes)
app.use('/api', authAdminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)



//database
require('../config/dbConnect')();



//port
port = process.env.PORT
// console.log(port);

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    })
})


app.post('/data', (req, res) => {
    res.status(200).json({
        message: req.body
    })
})


app.listen(port, () => console.log(`Example app listening on port port! ${port}`))








