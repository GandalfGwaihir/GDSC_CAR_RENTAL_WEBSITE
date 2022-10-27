const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://Rohan_5002:Rohan5002@cluster0.awtl21q.mongodb.net/Car-Rental' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose