const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    nama:{
        type: String,
        required: true
    },
    rate:{
        type: String,
        required: true
    },
    overview:{
        type: String,
        required: true
    },
    pengalaman:{
        type: String,
        required:true
    },
    pendidikan1:{
        type: String,
        required:true
    },
    pendidikan2:{
        type: String,
        required:true
    },
    contact:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
})

const Partner=mongoose.model('partners',partnerSchema);
module.exports=Partner;