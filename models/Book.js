// Importaciones
const mongoose = require("mongoose")
//schema
//son los requisitos para la creacion de un libro
const bookSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    rating: Number
},
{
    timestamps:true //ayuda a etablecer la fecha en la que fue creado
}
)
//MODELO
const Book = mongoose.model("Book", bookSchema)

//EXPORTACION
module.exports = Book