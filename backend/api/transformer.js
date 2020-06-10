module.exports = app => {
	stringToBinary = (valueString) => {
		let returnBinary = ""

		for(let i = 0 ; i < valueString.length ; i++) {
			returnBinary += valueString[i].charCodeAt(0).toString(2) + " "
		}
	
		return returnBinary
	}

	binaryToString = (valueBinary) => {
		valueBinary += valueBinary.toString()
		let returnString = ''

		valueBinary.split(' ').map( result => {
			returnString += String.fromCharCode(parseInt(result, 2))
		})
		console.log(returnString)
		return returnString
	}
	return { stringToBinary, binaryToString }
}