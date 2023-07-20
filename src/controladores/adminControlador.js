const path = require('path')


module.exports = {
    admin: (req, res) => res.send(`Página de admin`),
    create: (req, res) => res.render('create'),
    created: (req, res) => res.render('create'),
}