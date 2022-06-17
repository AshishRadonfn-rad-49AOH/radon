let axios = require("axios")

let getWeather = async function (req, res) {
    try {
        
        let q = req.query.q
        let appid = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({status: true, msg: result.data })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}
let getSortedCities= async function(req,res){
    try{
        let cities= ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
        let cityObjArray=[]
        for(i=0;i<cities.length;i++){
            let obj = {city:cities[i]}
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=259ba18050e844653c2235af61c1277c`)
            obj.temp= result.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function(a,b){return a.temp-b.temp})
        res.status(200).send({status:true,msg:sorted})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getSortedCities=getSortedCities

module.exports.getWeather=getWeather
