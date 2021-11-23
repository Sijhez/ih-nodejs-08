//IMPORTACIONES
const express = require("express")
const router = express.Router()

const bookController = require("./../controllers/bookController")
//RUTEO

//CREATE
//CREAR LIBRO- VISTA PARA EVER EL FORMULARIO
router.get("/create", bookController.viewCreateBook)
//.post: se usa para que podamos enviar datos del formulario del usuario
//crear libro-ruta para el formulario
router.post("/create", bookController.createBook)


//READ
//lectura de todos los libros creados
router.get("/", bookController.getAllBooks )

//lectura de un libro 
//usando : indicamos que cualquier parametro despues de /: vamos a ejecutar el controlador siguiente
router.get("/:bookID", bookController.getBook)

// EDIT
// EDITAR UN LIBRO
router.get("/:bookID/edit", bookController.viewEditBook)
router.post("/:bookID/edit", bookController.editBook)


//DELETE
//Borrar un elemento en específico
router.post("/:bookID/delete", bookController.deleteBoook)


//EXPORTACIONES
module.exports = router