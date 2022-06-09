const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")

const createBook= async function (req, res) {
        const book = req.body
        let savedBook = await bookModel.create(book)
        res.send({ msg: savedBook })
    
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getAllBooks= async function(req,res){
   let fAuthor= await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id : 1 })
   //let id = fAuthor[0].author_id
   let Books = await bookModel.find()
   res.send({msg: Books})
 }
   

const getAuthorName = async function(req,res){
    // let bookD =await bookModel.find({"name":"Two states" })
    // let id = bookD[0].author_id
    // let aName = await authorModel.find({"author_id":id }).select({author_name:1,_id:0})
    // let bkname = bookD[0].name
    // let updatedPrice = await bookModel.findOneAndUpdate(
    //     {name: bkname},
    //     {price:100},
    //     {new:true}).select({price:1,_id:0})

    let updatedPrice =await bookModel.findOneAndUpdate({"name":"Two states" },{$set:{price:100}},{new:true}).select({price:1,_id:0})
    let BookD = await bookModel.find({"name":"Two states" })
    let id = BookD[0].author_id
    let aName = await authorModel.find({author_id:id}).select({author_name:1,_id:0})
    res.send({msg: aName, updatedPrice:updatedPrice})
}

const authorNames = async function(req,res){
    let fBooks =await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1, name:1})
    let fAuthor =await authorModel.find().select({ author_id :1,author_name:1})
    let data = [ ]
    for(i=0;i<fAuthor.length;i++){
       fBooks.forEach(element =>{
      if(element.author_id == fAuthor[i].author_id){
          data.push({"Author Name " : element.name, "Book Name ": fAuthor[i].author_name})
      }

    
    })
    }

    res.send({data})
}

//UPDATED ASSIGNMENT

const byAutherId = async (req, res) => {
    const Author_Id = req.params.authorbyid;
    const bookName = await bookModel
      .find({ author_id: Author_Id })
      .select({ name: 1, _id: 0 });
    res.send(bookName);
  };

  const ageAuthor = async (req, res) => {
    const isOlder50yAuthor = await authorModel.find({age:{$gte : 50} }); // 2 array
   // console.log(isOlder50yAuthor)
    const book =await bookModel.find(); // 4 array
    const authorName = []
      isOlder50yAuthor.forEach(ele =>{
        book.forEach(item =>{
          if( item.author_id === ele.author_id && item.rating >= 4 ){
            authorName.push({author_age: ele.age ,author_name: ele.author_name})
          }
        })
      })
    res.send(authorName)
  };


module.exports.createBook=createBook
module.exports.createAuthor=createAuthor
module.exports.getAllBooks=getAllBooks
module.exports.getAuthorName=getAuthorName
module.exports.authorNames=authorNames
//updated assignment
module.exports.byAutherId=byAutherId
module.exports.ageAuthor=ageAuthor