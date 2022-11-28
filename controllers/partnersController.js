const partner = require('../models/partnersModel');


const createPartner = async (req,res) => {
    const  {nama,rate,overview,pengalaman,pendidikan1,pendidikan2,contact,img}  = req.body;
    const dataPartner = new partner({nama,rate,overview,pengalaman,pendidikan1,pendidikan2,contact,img})
    try {
        const tambahData = await dataPartner.save();
        res.status(201).json(tambahData);
        console.log("sukses menambahkan data partner")
    }
    catch (error) {
        console.log(error.message)
    }
};

const updatePartner = async (req,res) => {
    try {
        const editPartner = await partner.updateOne({_id:req.params.id},{$set:req.body});
        res.status(200).json(editPartner)
        console.log("edit data partner berhasil")
    } catch (error) {
        console.log(error.message)
    }
};

const getPartners = async (req,res) => {
    try {
        const response = await partner.find();
        res.status(200).json(response);
        console.log("sukses mendapatkan data partner")
    } catch (error) {
        console.log(error.message)
    }
};

const getPartnersById = async (req,res) => {
    try {
        const response = await partner.findById(req.params.id)
        res.status(200).json(response);
        console.log("succes dapatkan id");
    } catch (error) {
        console.log(error.message)
    }
};

const deletePartner = async (req,res) => {
    try {
        const deletepartner = await partner.deleteOne({_id:req.params.id});
        res.status(200).json(deletepartner);
        console.log("berhasil delete data partner")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getPartners,
    getPartnersById,
    createPartner,
    updatePartner,
    deletePartner
}