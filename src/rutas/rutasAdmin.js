const express = require(`express`)
const rutas = express.Router()
const adminControlador = require(`../controladores/adminControlador.js`)
const uploadFiles = require(`../middleware/uploadfile.js`)

rutas.get(`/`, adminControlador.adminView)
rutas.get(`/create`, adminControlador.createView )
rutas.post(`/create`, uploadFiles.array('images', 2), adminControlador.createPost)
rutas.get(`/edit/:id`, adminControlador.editView)
rutas.put(`/edit/:id`, adminControlador.editPut)
rutas.delete(`/edit/:id`)

module.exports = rutas 