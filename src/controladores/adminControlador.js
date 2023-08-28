const { getItems, getItem, getLicences, getCategories, crearItem, editItem, } = require(`../modelos/items.js`)

module.exports = {
    adminView: async (req, res) => {
		const items = await getItems()
		res.render('admin/admin',{items: items})
	},
    
    createView: async (req, res) => {
        const licences = await getLicences()
        const categories = await getCategories()
        res.render ('admin/create', {
            licences: licences, 
            categories: categories 
        })
    },
    
    createPost: async (req, res) => {
        const item = {
            product_name: req.body.name,
            product_description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            discount: req.body.discount,
            sku: req.body.sku,
            dues: req.body.dues, 
            image_front: req.files[0].filename,
            image_back: req.files[1].filename,
            licence_id: req.body.licence,
            category_id: req.body.category
        }
        const response = await crearItem(item)   
        
        res.redirect('/admin')
    },

    editView: async (req, res) => {
        const id = {product_id: req.params.id}
        const licences = await getLicences()
        const categories = await getCategories()
        const item = await getItem(id)
        if (!item) {
            res.status(404).send('el producto no existe, fue eliminado')
        }
        res.render('./admin/edit', {
            item:item,
            licences: licences, 
            categories: categories,
            id: id
            
        })
    },
    
    editPut: async (req, res) => {
        const id = {product_id: req.params.id}
        // const item = await getItem(id)
        const item = {
            product_name: req.body.name,
            product_description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            discount: req.body.discount,
            //sku: req.body.sku,
            image_front: 'image_front',
            image_back: 'image_back',
            licence_id: req.body.licence,
            category_id: req.body.category
        }
        
       /* if (req.files != 0){
            itemEdited.image_front = req.files[0].filename
            itemEdited.image_back = req.files[1].filename
        } else{
            itemEdited.image_front = item[0].image_front
            itemEdited.image_back = item[0].image_back
        }*/
        console.log(id.product_id)
        console.log('Pasando del controlador al modelo')
        const response = await editItem(item, id.product_id)
        
        res.redirect('/admin')
    }
    //editDelete: 
}