const express = require(`express`)
const rutas = express.Router()
const controlador = require(`../controladores/controlador.js`)

rutas.get(`/`, controlador.home)
rutas.get(`/contact`, controlador.contact)
rutas.get(`/about`, controlador.about)
rutas.get(`/faqs`, controlador.faqs)

//Una vez definidas todas las rutas o endpoints debemos exportar el módulo router para ser utilizado desde app.js
module.exports = rutas
