module.exports = app => {
	app.post('/users', app.api.user.saveOrUpdate)

}