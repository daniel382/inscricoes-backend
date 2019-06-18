const express = require('express')

module.exports = function(app) {
	const router = express.Router()
	app.use('/api', router)

	const inscricoes = require('../api/inscricoes/services')
	inscricoes.register(router, '/inscricoes')
}
