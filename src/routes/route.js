const express = require('express');
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();


router.get('/hello', function (req, res) {
    let month = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
    let getMonth = lodash.chunk(month,4)

    let arr = [1,3,5,7,9,11,13,15,17,19]
    let getoddnum = lodash.tail(arr,9)

    let getunion= lodash.union([1,2,3,4,5],
                               [2,3,4,5,6],
                               [3,4,5,6,7],
                               [4,5,6,7,8],
                               [5,6,7,8,9])

    let movies = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    let getmovies = lodash.fromPairs(movies)
    
    res.send('watching movies!')
    console.log(getMonth)
    console.log(getoddnum)
    console.log(getunion)
    console.log(getmovies)

});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/movies', function(req, res){
    const movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]
   console.log(JSON.stringify(movies))

   res.send('Hello there thats it!')
})

router.get('/movies/:indexNumber', function(req, res){
    let movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]   
    if(req.params.indexNumber<movies.length){
        console.log(movies[req.params.indexNumber])
     } else{
        console.log('invalid index')
    }
    res.send('Hello there do it!')
})

//router.get('/movies/:indexNumber', function(req, res){
     //let movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]
    //console.log(req)
    
    //res.send(movies[req.params.indexNumber])
    //let movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]
    //console.log(req)
   // if(req.params.indexNumber >= movies.length)
    //{
      //  res.send('not found') 
    //} else{
       // res.send(movies[req.params.indexNumber])
    //}
//})

router.get('/films', function(req, res){
    let films = [ {
        "id": 1,
        "name" : "The Shining"
       }, {
        id: 2,
        "name": "ncendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
   console.log(JSON.stringify(films))

   res.send(films)
})

router.get('/films/:filmId', function(req, res){ 
    let films = [ {
        "id": 1,
        "name" : "The Shining"
       }, {
        id: 2,
        "name": "ncendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       if ( 0 >= req.params.filmId ||  films.length < req.params.filmId) {
        res.send("No movie exists with this id");
        console.log("No movie exists with this id")
      } else {
        const filmData = films.find(ele => ele.id === +req.params.filmId)
        res.send(filmData);
        console.log(filmData);
      }
        })


    router.get("/sol1", function (req, res) {
        //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
        let arr= [1,2,3,5,6,7]
      
        let total = 0;
        for (var i in arr) {
            total += arr[i];
        }
      
        let lastDigit= arr.pop()
        let consecutiveSum= lastDigit * (lastDigit+1) / 2
        let missingNumber= consecutiveSum - total
        console.log(missingNumber)
        res.send(  { data: missingNumber  }  );
      });
    router.get("/sol2", function (req, res) {
        //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
        let arr= [33, 34, 35, 37, 38]
        let len= arr.length
      
        let total = 0;
        for (var i in arr) {
            total += arr[i];
        }
      
        let firstDigit= arr[0]
        let lastDigit= arr.pop()
        let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
        let missingNumber= consecutiveSum - total
        console.log(missingNumber)
        res.send(  { data: missingNumber  }  );
      });
         
    
      







module.exports = router;
// adding this comment for no reason    