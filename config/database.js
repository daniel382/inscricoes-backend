const mongoose = require('mongoose')
const url = 'mongodb://10.0.2.1:27017/inscricoes'
const config = { useNewUrlParser: true }

module.exports = mongoose.connect(url, config)
