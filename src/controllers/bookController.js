const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBooks = async function (req, res) {
    let book = req.body
    
    if(!book.author) res.send("Please Enter Your Author Id")
    const author = await authorModel.findById(book.author)
   if(!author) res.send("This is not a valid Author Id")


   if(!book.publisher) res.send("Please Enter Your Publisher Id")
    const publisher = await publisherModel.findById(book.publisher)
   if(!author) res.send("This is not a valid Publisher Id")
   
   const saveData = await bookModel.create(book)
   res.send({msg: saveData})

}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate("author publisher")
    res.send({data: books})
}

const newData= async function(req,res){
    const update = await bookModel.updateMany({$or:[{"publisher":"62a1be6bb37f04afe249da84"},{"publisher":"62a1e0e763e008fe6d6e302c"}]},{isHardCover:true});
    res.send({msg:update})
}

const saleIncrease= async function(req,res){
    const priceIncrease = await bookModel.updateMany({rating:{$gt:3.5}},{$inc:{price:+10}});
    res.send({data:priceIncrease})
}



module.exports.createBooks = createBooks
module.exports.getBooksData=getBooksData
module.exports.newData=newData
module.exports.saleIncrease=saleIncrease