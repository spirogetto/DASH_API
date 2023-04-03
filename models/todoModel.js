const mongoose = require('mongoose');


const schemaStructure = {
    title : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        required : true
    },
    timestamp : {
        type : Date,
        required : true,
        default : Date.now
    }
}

const todoSchema = new mongoose.Schema(schemaStructure);

module.exports = mongoose.model('Todos',todoSchema)