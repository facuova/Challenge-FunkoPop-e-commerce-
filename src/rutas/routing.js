const express = require(`express`)
const fs = require(`fs`)
const router = express.Router()

router.get(`/machete/:version`, (req, res) => {  //localhost:3000/machete/10
	console.log(req.params.version)  //10
	const file = fs.readFileSync(`${__dirname}/package.json`)
	res.send(JSON.parse(file))
})

router.get(`/shop`, (req,res) => {  //localhost:3000/shop?nombre=strom&precioMin=100
	console.log(req.query)  // { nombre: 'strom', precioMin: '100' }
})

router.post(`/`, (req, res) => {
	res.send(req.body)
})

router.put(`/prueba`, (req, res) => {
	console.log(req.method)
	res.send(`Llegó el PUT`)
})

router.get(`/pruebaExtraSuperDuper`, (req, res) => {
	const file = fs.readFileSync(`${__dirname}/arrays.html`)
	res.end(file)
})

module.exports = router