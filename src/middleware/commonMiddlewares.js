const mid1= function ( req, res, next) {
    
    const header = req.headers["isfreeappuser"];

    if(!header){
     return   res.send("Missing a Mandatory Header")
    }
    else
    // req.body["isFreeAppUser"]=req.headers.isfreeappuse;
    next();
}

module.exports.mid1= mid1