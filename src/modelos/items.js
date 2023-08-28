const { conn } = require(`../config/connexion.js`)

const getItems = async () => {
	try {
		const [rows] = await conn.query(`SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;`)
		return rows
	} catch(error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
}

const getItem = async (id) => {
	try {
		const [rows] = await conn.query(`SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;`, id)
		return rows
	} catch(error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
}

const getLicences = async() => {
	try {
		const [rows] = await conn.query('SELECT licence_name FROM licence')
		return rows
	} catch(error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
}

const getCategories = async() => {
	try {
		const [rows] = await conn.query('SELECT category_name FROM category')
		return rows
	} catch(error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
}

const crearItem = async (item) => {
	try {
		const [rows] = await conn.query(`INSERT INTO product SET ?`, item)
		return rows
	} catch(error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
} 

const editItem = async (item, id) => {
	
	try {
		const [rows] = await conn.query(`UPDATE product SET ? WHERE ?;`, [item, id])
		return rows
	} catch(error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
} 


module.exports = {
	getItems,
	getItem,
	getLicences,
	getCategories,
	crearItem,
	editItem
}