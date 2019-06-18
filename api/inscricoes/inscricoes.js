const restful = require('node-restful')
const mongoose = restful.mongoose

const EnderecoSchema = new mongoose.Schema({
	rua: { type: String, required: true },
	numero: { type: Number, required: true },
	bairro: { type: String, required: true },
	cep: { type: String, required: true },
	pontoReferencia: { type: String, required: true },
	detalhes: { type: String, required: false }
})

const ContatoSchema = new mongoose.Schema({
	telefone1: { type: String, required: true },
	telefone2: { type: String, required: false },
	telefone3: { type: String, required: false }
})

const EscolarSchema = new mongoose.Schema({
	escola: { type: String, required: true },
	notaPortugues: { type: Number, required: true },
	notaMatematica: { type: Number, required: true },
	questionario: { type: Number, required: true },
	frequencia: { type: Number, required: true }
})

const CandidatoSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	nomeMae: { type: String, required: true },
	nomePai: { type: String, required: true },
	rg: { type: String, required: true },
	dataNascimento: { type: Date, required: true },
	sexo: { type: String, required: true },
	naturalidade: { type: String, required: true },
	rendaFamiliar: { type: Number, required: true },
	ptr: { type: Boolean, required: true },
	moradia: { type: String, required: true },
	publicidade: { type: String, required: true },
	observacoes: { type: String, required: false },
	classificado: { type: Boolean, required: true },
	pontuacao: { type: Number, required: true },
	colocacao: { type: Number, required: true },

	endereco: EnderecoSchema,
	contato: ContatoSchema,
	escolar: EscolarSchema
})

module.exports = restful.model('2019', CandidatoSchema)
