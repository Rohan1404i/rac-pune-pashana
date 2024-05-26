const mongoose = require('../config/db');

const avenueSchema = new mongoose.Schema({
    avenueName: {
        type: String,
        required: true,
    },
    director : {
        type : String,
        required : true
    }, 
    desc:{
        type: String,
        required: true,

    }, 
    mainImage:{
        type: String,
        // required: true,
    },
    fullDesc:{
        type: String,
        required: true,
    },
     images:{
        type:Array,
     }
});

module.exports = mongoose.model('avenue', avenueSchema);