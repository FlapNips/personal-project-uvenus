const app = require('express')()
const db = require('./database/db')
const consign = require('consign')

app.db = db

consign()
	.include('./config/passport.js')
	.then('./config/passport.js')
	.then('./config/middlewares.js')
	.then('./api/faculdade.json')
	.then('./api/validation.js')
	.then('./api/transformer.js')
	.then('./api/date.js')
	.then('./api/article.js')
	.then('./api')
	.then('./config/routes.js')
	.into(app)

app.listen(3000, ()=> {
	console.log('Servidor Backend rodando !')
})