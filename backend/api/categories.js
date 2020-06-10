module.exports = app => {
	const { existsOrError, existsInDB } = app.api.validation

	const newOrUpdateCategory = (req, res) => {
		const category = { ...req.body }

		try {

			existsOrError(category.name, 'Informe o nome da categoria')
			if(category.category_id) await existsInDB('categories', 'category_id', 'category_id', category.category_id
			, 'Categoria não encontrada') 

		} catch(errorClient) {

			return res.status(400).send(errorClient)
		}

		try {
			if(category.category_id) {
				app.db('categories')
					.update({ category_name: category.category_name})
					.where({ category_id: category.category_id})
					.first()
					.then(() => { return res.status(202).send('Atualizado') })
					.catch(errorServer => errorServer )
		} else {
			app.db('categories')
				.insert({ category_name: category.category_name})
				.then( ()=> {return res.status(202).send('Categoria criada com sucesso')})		
				.catch( errorServer => errorServer)
		}
		
		} catch(errorServer) {

			return res.status(500).send(errorServer)
		
		}
	
	}

	return { newOrUpdateCategory }
}