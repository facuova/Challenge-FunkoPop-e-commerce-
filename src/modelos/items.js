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
		console.log(rows)
		return rows
	} catch(error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
}

/* const crearItem = async (archivos) => {
	try {
		const [rows] = await conn.query(`INSERT INTO product (columnas) VALUES ?;`, [archivos])
		return rows
	} catch(error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
} */

module.exports = {
	getItems,
	getItem
}