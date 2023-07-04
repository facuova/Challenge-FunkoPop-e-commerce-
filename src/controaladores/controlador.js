const { getItems } = require(`../modelos/items.js`)

module.exports = {
	home: async (req, res) => {
		const items = await getItems()
		res.render('home', {items})
	},
	contact: (req, res) => res.send(`Página de contactos`),
	about: (req, res) => res.send(`Página Sobre de Nostros`),
	create: (req, res) => res.render('create'),
	created: (req, res) => {
		console.log(req.files)
		res.render('create')
		/* const archivo = {
			front: req.files[0].path,
			back: req.files[1].path
		}
		const crear = await crearItem(archivo) */
	}
}

// function paginaSecreta(req,res) { etc... }
// module.exports = {paginaSecreta}

/*	PaginaSecreta: (req, res) => res.end(fs.readFileSync(`${__dirname}/../../machete.html`)),
	PaginaSecretaPost: (req, res) => {
		console.log(req.url)
		res.send(`<h2>Estoy respondiendo a un POST</h2>`)
	},
	pagina_secreta_id: (req, res) => { //<a href="paginaSecreta/${prod.id}">
		console.log(req.params)
		res.send(`<h2>Recibí pedido detallado de: ${req.params.codigo}</h2>`)
	},
	query: (req, res) => {
		if(req.query.nombre == "Vlad"){
			res.send(`<h2>Recibí pedido detallado de: ${req.query.nombre}</h2>`)
		} else {
			res.send(`<h2>No recibí un pedido</h2>`)
		}
	},
	Info: (req, res) => {
		const file = fs.readFileSync(`${__dirname}/package.json`)
		console.log(file)
		res.send(JSON.parse(file)*/