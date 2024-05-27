const mongoose = require('../config/db');

const avgSchema = new mongoose.Schema({
  angry: { type: Number},
  happy: { type: Number},
  fearful: { type: Number},
  disgusted: { type: Number},
  sad: { type: Number},
  neutral: { type: Number},
  surprised: { type: Number}
});

const expressionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    avg:{
        type: avgSchema,
        required: true
    }
});

module.exports = mongoose.model('expressions', expressionSchema);