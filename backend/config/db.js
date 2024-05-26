require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
mongoose.connection.on('connected' , () => {
    console.log("Db connected successfully");
})
mongoose.connection.on('error' , (err) => {
    console.log("Error ocurred :",err);
})


module.exports = mongoose;