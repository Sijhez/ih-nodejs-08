const mongoose = require("mongoose")

const connectDB = async() =>{
    await mongoose.connect(process.env.MONGODB_ATLAS, {
        useNewUrlParser: true, //formato nuevo de mongoDB
		useUnifiedTopology: true
    })
    console.log("Base de datos conectada")
}

module.exports = connectDB