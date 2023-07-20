const express = require(`express`)
/*Para esto utilizaremos una dependencia llamada method-override, 
otro middleware que captura la petición y si posee una mención a 
algún método no soportado, lo sobreescribe.*/
const method = require(`method-override`)
const rutas = require(`./src/rutas/rutas.js`)
const rutasShop = require(`./src/rutas/rutasShop.js`)
const rutasAdmin = require(`./src/rutas/rutasAdmin.js`)
const path = require('path')
const ejs = require('ejs');
//Middleware env
require(`dotenv`).config()

const port =  process.env.PORT;
const server = express()

server.use(express.static(`public`)) // <-'/' index.html

/*Usando los middlewares nativos .urlencoded() y .json() podemos convertir 
la data de estos formatos a uno que el servidor pueda manejar.*/
server.use(express.urlencoded())
server.use(express.json())

server.use(method(`_metodo`))

//indicamos en nuestro entry point que usaremos un motor de plantillas y donde alojaremos los templates:
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, './src/vistas'))

/*llamamos nuestro archivo de rutas desde app.js y a través del middleware 
server.use() indicamos que peticiones deben ser respondidas con esas rutas*/
server.use(`/`, rutas) // '/etc' ejecuta rutas
server.use(`/shop`, rutasShop)
server.use(`/admin`, rutasAdmin)

// Middleware para manejar el error 404 
server.use((req,res) => res.status(404).send(`Recurso no encontrado`))

server.listen(port, () => console.log(`Estoy funcionando en localhost:${port}`))

/*const server = http.createServer((req, res) => {
	const file = fs.readFileSync(__dirname + `/machete.html`) //`${__dirname}/machete.html`
	res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
	res.end(file)
})*/




