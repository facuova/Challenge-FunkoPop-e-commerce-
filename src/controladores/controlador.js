const { getItems } = require(`../modelos/items.js`)

module.exports = {
	home: async (req, res) => {
		const items = await getItems()
		res.render('home', {items: items})
	},
	contact: (req, res) => res.send(`Página de contactos`),
	about: (req, res) => res.send(`Página Sobre de Nostros`),
	faqs: (req, res) => res.send(`Página de faqs`)
}

