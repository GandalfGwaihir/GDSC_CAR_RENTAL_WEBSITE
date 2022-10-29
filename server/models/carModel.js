const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    image : {type : String , required : true} , 
    carType: {type: String , required : true},
    name : {type : String , required : true} ,
    rentPerHour : {type : Number , required : true},
    rating : {type : Number , required : true},
    mileage : {type : Number, required :  true},
    fuelType : {type : String , required : true} , 
    driveType : {type : String,required : true}



},{timestamps : true}

)
const carModel = mongoose.model('cars' , carSchema)
module.exports = carModel