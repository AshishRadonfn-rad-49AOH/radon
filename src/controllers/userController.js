const userModel= require("../models/userModel")


const createUser= async function (req, res) {
    let data= req.body

    const header = req.headers["isfreeappuser"];

    if(!header){
     return   res.send("Missing a Mandatory Header")
    }

    let savedData= await userModel.create(data)
    res.send({msg: savedData})
}



module.exports.createUser= createUser
