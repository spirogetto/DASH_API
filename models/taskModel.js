const mongoose = require('mongoose');

const schemaStructure = {
    cat : {type:String, required : true, default: "Others"},
    duration : {type:Number, required : true, default: 60},
    createdAt : {type:Date, required:true, default: Date.now}

};

const taskSchema = mongoose.Schema(schemaStructure);
module.exports = mongoose.model("tasks",taskSchema)