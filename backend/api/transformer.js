module.exports = app => {
	stringToBinary = (param1) => {
		let returnBinary = ""

		for(let i = 0 ; i < param1.length ; i++) {
			returnBinary += param1.charCodeAt(0).toString(2)
		}
	
		return returnBinary
	}
	return { stringToBinary }
}