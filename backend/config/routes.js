module.exports = app => {
	app.route('/user')
		app.post(app.api.user.saveOrUpdate)
		app.remove(app.api.user.remove)
}