const expressions = require("../modals/expressions");
require("dotenv").config();

exports.postExpressions = async (req, res) => {

  const {data, name} = req.body;

  console.log("CALLED THIS and THAT");
  
    if(!data || !name)
        return res.status(200).json({"message" : "Data and Name both are compulsary"})

    const newExpressions = new expressions({
        avg : data,
        name
    })

    newExpressions.save().then(saved => {
        if(!saved)
            return res.status(200).json({"message" : "Some error"})

        return res.status(200).json({"message" : "Saved sucessfully"})
    })
    .catch((err) => {
        return res.status(200).json({"message" : err})
    })
};