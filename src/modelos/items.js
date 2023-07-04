const { conn } = require(`./connexion.js`)

const getItems = async () => {
	try {
		const [rows] = await conn.query(`SELECT * FROM product;`)
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
	getItems
}