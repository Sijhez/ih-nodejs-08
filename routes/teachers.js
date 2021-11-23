const express = require("express")
const router= express.Router()//establecemos como instancia el manejo del ruteo

// 2. RUTAS

router.get("/mike", (req, res) => {
	res.send("Estás en la página de teachers de mike")
})

router.get("/", (req, res) => {
	res.send("Estás en el home de teachers")
})




//EXPORTACIONES
module.exports = router