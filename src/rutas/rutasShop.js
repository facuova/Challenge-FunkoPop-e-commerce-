const express = require(`express`)
const rutas = express.Router()
const shopControlador = require(`../controladores/shopControlador.js`)

rutas.get(`/`, shopControlador.shop)
rutas.get(`/item/:id`, shopControlador.detalle)
rutas.post(`/item/:id/add`, shopControlador.add)
rutas.get(`/cart`)
rutas.post(`/cart`)
module.exports = rutas