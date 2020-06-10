module.exports = app => {
	const api = app.api.faculdade

	existsOrError = (param1, error) => {
		if(typeof param1=== 'object' && Object.keys(param1).length === 0 ) throw error
		if(!param1) throw error
		if(Array.isArray(param1 && param1.lenght === 0)) throw error
		if(typeof param1 === 'string' && !param1.trim()) throw error
	}

	notExistsOrError = (param1, error) => {
		try {
			existsOrError(param1, error)
		}catch {
			return
		}
		throw error
	}
	existsInDB = (table, selectColumn, whereColumn, valueA) => {
		return app.db(table)	
				.select(selectColumn)
				.where(`${whereColumn}`, valueA)
				.first()
	}
	
	const updateValidation = {
		username: (valueUsername) => {
			const minimumChars = /^(?=.{5,22}$)/
			const legalUsername = /^(?![__])(?![_.])(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
			if(!minimumChars.test(valueUsername)) throw 'O usúario deve conter entre 5 e 22 caracteres'
			if(!legalUsername.test(valueUsername)) throw 'Usuário inválido!'
			return
			},
		password: (valuePassword) => {
			const minPassword = /^(?=.{6,30}$)/
			if(!minPassword.test(valuePassword)) throw 'A senha deve conter pelo menos 6 caracteres!'
			return
		},
		email: (valueEmail) => {
			const legalEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
			if(!legalEmail.test(valueEmail)) throw 'Email inválido!'
			return
		},
		full_name: (valueFullName) => {
			const legalFullName = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/
			if(!legalFullName.test(valueFullName)) throw 'Informe seu nome completo'
			return
		},
		age: (valueAge) => {
			if(valueAge === undefined) throw 'Informe sua idade !'
			if(isNaN(valueAge)) throw 'Apenas números'
			if(!(0 < valueAge.length <= 3)) throw 'Digite uma idade válida'
			return
		},
		state: (valueState) => {
			if(valueState === undefined) throw 'Defina um estado'
			if(!api.hasOwnProperty(valueState)) throw 'Estado não encontrado'
			return
		},
		city: (valueState, valueCity) => {
			const city = api[valueState].cidades.filter(city => city === valueCity)
			if(valueCity === undefined) throw 'Defina uma cidade'
			if(!city[0]) throw 'Cidade não encontrada'
			return
		},
		college: (valueState, valueCollege) => {
			const college = api[valueState].faculdades.filter(college => college === valueCollege)
			if(valueCollege === undefined) throw 'Defina uma faculdade'
			if(valueCollege === "Outro") return
			if(!college[0]) throw 'Faculdade não encontrada'
			return
		},
		course: (valueCourse) => {
			const cursos = app.api.cursos
			const course = cursos['cursos'].filter(course => course === valueCourse)
			if(valueCourse === undefined) throw 'Defina um curso'
			if(valueCourse === "Outro") return
			if(!course[0]) throw 'Curso não encontrada'
			return
		}
	}
	return { 
		existsOrError, 
		notExistsOrError, 
		existsInDB, 
		updateValidation }
}