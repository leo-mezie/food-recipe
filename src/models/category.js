const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
name:{
    type:String,
    required:'this field is required'
},
image:{
    type:String,
    required:'this field is required'
}
});

// category should be the connection name
module.exports = mongoose.model('category', categorySchema);