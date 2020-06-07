module.exports = app => {
	toLowercase = async (param1, param2, param3) => {
		param2 = param2 || ''
		param3 = param3 || ''

		await param1.toLowercase
		await param2.toLowercase
		await param3.toLowercase

		return {param1, param2, param3}
	}
	return {toLowercase}
}