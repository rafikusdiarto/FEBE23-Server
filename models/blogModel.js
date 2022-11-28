const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    img:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required:true
    }
})

const Blog=mongoose.model('blogs',blogSchema);
module.exports = Blog;