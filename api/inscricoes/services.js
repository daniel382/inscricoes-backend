const Candidato = require('./inscricoes')

Candidato.methods(['get', 'post', 'put', 'delete'])
Candidato.updateOptions({ new: true, runValidators: true })

module.exports = Candidato
