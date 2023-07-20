const express = require(`express`)
const rutas = express.Router()
const adminControlador = require(`../controladores/adminControlador.js`)


rutas.get(`/`, adminControlador.admin)
rutas.get(`/create`, adminControlador.create )
rutas.post(`/create`, adminControlador.create)
rutas.get(`/edit/:id`)
rutas.put(`/edit/:id`)
rutas.delete(`/edit/:id`)

module.exports = rutas 