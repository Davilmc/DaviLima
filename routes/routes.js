const express = require('express')
const PessoasController = require('../controller/PessoasController.js')
const routes = express.Router()



routes.get('/', PessoasController.index)
routes.get('/sobre', PessoasController.sobre)
routes.get('/login', PessoasController.login)
routes.post('/pessoas',PessoasController.store)
module.exports = routes