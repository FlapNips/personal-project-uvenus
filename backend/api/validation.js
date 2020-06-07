module.exports = app => {
	existsOrError = (param1, error) => {
		if(typeof param1=== 'object' && Object.keys(param1).length === 0 ) throw error
		if(!param1) throw error
		if(Array.isArray(param1 && param1.lenght === 0)) throw error
		if(typeof param1 === 'string' && !param1.trim()) throw error
	}

	notExistsOrError = (param1, error) => {
		try {
			existsOrError(param1, error) //Se passar, significa que existe
		}catch {
			return //se der erro acontecerá nada
		}
		throw error //se passar do try/catch, significa que não deu erro e assim significa que existe, ou seja, EXISTE = ERRO
	}
	existsInDatabase = async (table, column, value, error) => {
		console.log('aqui foi')
		const teste = await app.db(table)
				.select(column)
				.where(column, "like", value)
		console.log('aqui foi 2')
		console.log(teste)

	}
	return { existsOrError, notExistsOrError, existsInDatabase}
}