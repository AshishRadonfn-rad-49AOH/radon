const printDate = function() {
    const d = new Date()
    console.log("current date :" + d.getDate())
}

const printMonth = function() {
    const d = new Date()
    console.log("current month :" + d.getMonth())
}

const getBatchInfo = function() {
    const batch = "Radon"
    const go = "W3D1"
    console.log(batch+","+go+","+" the topic for today is Nodejs module system")
    
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo
