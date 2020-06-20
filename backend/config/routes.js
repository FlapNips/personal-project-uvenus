module.exports = app => {
	app.post('/conectar', app.api.auth.signIn)
	app.post('/validateToken', app.api.auth.validateToken)
	app.post('/registrar', app.api.user.createUser)

	app.route('/user')
		.post(app.api.user.createUser)
	
	app.route('/user/:user_id')
		.put(app.api.user.updateUser)
		.delete(app.api.user.deletedUser)

	app.route('/category')
		.post(app.api.category.newCategory)

	app.route('/category/:category_id')
		.put(app.api.category.updateCategory)

	app.route('/article')
		.post(app.api.article.newArticle)

	app.route('/article/:article_id')
		.get(app.api.article.getArticle)
}