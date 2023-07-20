const express = require(`express`)
const rutas = express.Router()

rutas.get(`/auth/login`)
rutas.post(`auth/login`)
rutas.get(`/auth/register`)
rutas.post(`auth/register`)
rutas.get(`/auth/logout`)

module.exports = rutas