const blog = require('../models/blogModel')

const addBlog = async (req,res) =>{
    const  {link,img}  = req.body;
    const dataBlog = new blog({link,img})
    try {
        const addBlog = dataBlog.save();
        res.status(201).json(addBlog)
        console.log("sukses menambahkan artikel")
    } catch (error) {
        console.log(error.message)
    }
}

const getBlog = async (req,res) => {
    try {
        const response = await blog.find();
        res.status(200).json(response);
        console.log("sukses mendapatkan data blog")
    } catch (error) {
        console.log(error.message)
    }
}

const deleteBlog = async (req,res) => {
    try {
        const deleteData = await blog.deleteOne({_id:req.params.id})
        res.status(200).json(deleteData)
        console.log("sukses menghapus artikel")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    addBlog,
    getBlog,
    deleteBlog
}