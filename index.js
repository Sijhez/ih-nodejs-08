//importaciones
const express = require("express")
const app = express()
const hbs = require("hbs")

const connectDB = require("./config/db.js")
require("dotenv").config()

//middlewares
app.set("views", __dirname+"/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")

app.use(express.urlencoded({extended:true}))

connectDB()

//ruteo
//aplicamos patrón modular de las rutas: El patrón modular ayuda a tener mas control de los ruteos, procesos y vista
app.use("/books", require("./routes/books"))

app.use("/teachers", require("./routes/teachers"))
app.use("/",require("./routes/index"))




//SERVIDOOOOOR!!!
app.listen(process.env.PORT, () => {
	console.log(`Corriendo en el puerto ${process.env.PORT}`)
})