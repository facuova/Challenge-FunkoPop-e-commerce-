const { getItems } = require(`../modelos/items.js`)

module.exports = {
	home: async (req, res) => {
		const items = await getItems()
		res.render('home', {items: items})

	},
	shop: (req, res) => res.render('shop',{
		message: 'Este texto es dinamico',
	}),
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

