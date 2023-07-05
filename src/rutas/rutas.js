const express = require(`express`)
const rutas = express.Router()
const multer = require(`multer`)
const path = require('path')
const controlador = require(`../controladores/controlador.js`)
const { body } = require("express-validator")
const validate = require(`../middleware/validacion`) 

const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../public/img')),
	filename: (req, file, cb) => cb(null, Date.now()+'_'+file.originalname)
})

const crearItem = [
	body('price')
	.isLength({min: 3})
	.withMessage("Poner un precio para el producto!")
]

const upload = multer({storage})

rutas.get(`/`, controlador.home)
rutas.get(`/contact`, controlador.contact)
rutas.get(`/about`, controlador.about)
//router.get(`/shop`, controlador.shop)
rutas.get(`/create`, controlador.create)
rutas.post(`/create`, crearItem, validate, upload.array('images', 2), controlador.created)

//Una vez definidas todas las rutas o endpoints debemos exportar el módulo router para ser utilizado desde app.js:
module.exports = rutas

/*router.get(`/paginaSecreta`, controlador.PaginaSecreta)
router.post(`/paginaSecreta`, controlador.PaginaSecretaPost)
router.get(`/paginaSecreta/:codigo`, controlador.pagina_secreta_id)
router.get(`/query`, controlador.query)
router.get(`/info`, controlador.Info) */