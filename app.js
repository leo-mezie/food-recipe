// `unhandled-rejections=strict`;

const express = require('express');
const expressLayout = require('express-ejs-layouts');
require('dotenv').config();
require("./config/db")
const app = express();
const port = process.env.PORT || 8000;

// midlewares
app.use(express.urlencoded({ extended:true}))
app.use(express.static('public'));
app.use(expressLayout);

app.set('layout', './layouts/main');
app.set('view engine','ejs')
const routes = require('./src/routes/recipeRoutes.js')
app.use('/',routes);


app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})