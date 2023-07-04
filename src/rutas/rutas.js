const express = require(`express`)
const router = express.Router()
const multer = require(`multer`)
const path = require('path')
const controlador = require(`../controadores/controlador.js`)
const { body } = require("express-validator")
const validate = require(`../middlewares/validacion`) 

const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/img')),
	filename: (req, file, cb) => cb(null, Date.now()+'_'+file.originalname)
})

const crearItem = [
	body('price')
	.isLength({min: 3})
	.withMessage("Poner un precio para el producto!")
]

const upload = multer({storage})

router.get(`/`, controlador.home)
router.get(`/contact`, controlador.contact)
router.get(`/about`, controlador.about)
router.get(`/create`, controlador.create)
router.post(`/create`, crearItem, validate, upload.array('images', 2), controlador.created)

module.exports = router

/*router.get(`/paginaSecreta`, controlador.PaginaSecreta)
router.post(`/paginaSecreta`, controlador.PaginaSecretaPost)
router.get(`/paginaSecreta/:codigo`, controlador.pagina_secreta_id)
router.get(`/query`, controlador.query)
router.get(`/info`, controlador.Info) */