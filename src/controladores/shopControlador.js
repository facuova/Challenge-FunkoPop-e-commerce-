const {getItems, getItem} = require(`../modelos/items.js`)

module.exports = {
    shop: async (req, res) => {
        const items = await getItems()
        res.render(`./shop/shop`, {items})
    },

    detalle: async (req, res) => {
        const id = {product_id: req.params.id}
        const item = await getItem(id)
        const items = await getItems()
        if (!item) {
            res.status(404).send('el producto no existe, fue eliminado')
        }
        res.render(`./shop/detalle`, {
            item: item,
            items: items 
        })
    },    
    
    add: (req,res) => res.send('Acá se agregaría al carrito')

}