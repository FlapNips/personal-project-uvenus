module.exports = app => {
	toLowercase = (param1, param2, param3) => {
		param2 = param2 || ''
		param3 = param3 || ''

		param1.toLowercase
		param2.toLowercase
		param3.toLowercase

		return {param1, param2, param3}
	}
	return {toLowercase}
}