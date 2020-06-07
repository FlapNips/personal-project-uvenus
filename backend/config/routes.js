module.exports = app => {
	app.route('/user')
		.post(app.api.user.saveOrUpdate)
		.delete(app.api.user.removeUser)
}