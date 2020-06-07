const app = require('express')()
const db = require('./database/db')
const consign = require('consign')

app.db = db

consign()
	.then('./config/middlewares.js')
	.then('./api/validation.js')
	.then('./api')
	.then('./config/routes.js')
	.into(app)

app.listen(3000, ()=> {
	console.log('Servidor Backend rodando !')
})