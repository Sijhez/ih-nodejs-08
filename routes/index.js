const express = require("express")
const router= express.Router()//establecemos como instancia el manejo del ruteo

//si usamos controllers usamos lo siguiente para importar el controller
const indexController= require("./../controllers/indexController")
//RUTAS DE LA URL BASE
router.get("/ejemplo", indexController.ejemplo)

router.get("/", indexController.home)

//EXPORTACIONES
module.exports = router