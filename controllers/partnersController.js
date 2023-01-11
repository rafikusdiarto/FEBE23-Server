const partner = require('../models/partnersModel');


const createPartner = async (req,res) => {
    const  {nama,rate,kota,overview,pengalaman,pendidikan1,pendidikan2,contact,img}  = req.body;
    const dataPartner = new partner({nama,rate,kota,overview,pengalaman,pendidikan1,pendidikan2,contact,img})
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

const searchPartner = async (req,res) => {
    try {
        const findname = req.params.nama
        const allPartner = await partner.find({nama:{ $regex: findname, $options: 'i'} })
        if(!allPartner) res.status(400).send({error : "Nama tidak ditemukan"})
        res.status(200).json(allPartner)
        console.log("berhasil cari partner")
    } catch (error) {
        console.log(error.message)
    }
}

const lokasiPartner = async (req, res) => {
    try {
        const lokasi = req.params.kota
        const kota = await partner.find({kota:{$regex: lokasi, $options:'i'}})
        res.status(200).json(kota)
        console.log("berhasil filter kota")
    } catch (error) {
        console.log(error.message)
    }
}

const deletTable = async (req, res) => {
    try {
        const removeTable = await partner.deleteMany({})
        res.status(200).json(removeTable)
        console.log("berhasil delete tabel")
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    deletTable,
    getPartners,
    getPartnersById,
    createPartner,
    updatePartner,
    deletePartner,
    searchPartner,
    lokasiPartner
}