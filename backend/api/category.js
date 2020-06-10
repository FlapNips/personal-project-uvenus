module.exports = app => {
	const { existsOrError, existsInDB } = app.api.validation

	const newCategory = (req, res) => {
		let category = {}
		category.category_name = req.body.category_name

		try {

			existsOrError(category.category_name, 'Informe o nome da categoria')

		} catch(errorClient) {

			return res.status(400).send(errorClient)

		}

		app.db('categories')
			.insert({ category_name: category.category_name})
			.then( ()=> { return res.status(202).send('Categoria criada com sucesso') })		
			.catch( errorServer => { return res.status(500).send(errorServer)} )
	
	}

	const updateCategory = async (req, res) => {
		let category = {}
		category.category_id = req.params.category_id
		category.category_name = req.body.category_name

		try { //FOR CLIENT

			if(category.category_id) await existsInDB('categories', 'category_id', 'category_id', category.category_id
			, 'Categoria não encontrada') 
			existsOrError(category.category_name, 'Informe o nome para atualizar a categoria')

		} catch(errorClient) {

			return res.status(400).send(errorClient)

		}
		
		app.db('categories')
			.update({ category_name: category.category_name})
			.where({ category_id: category.category_id})
			.then(() => { return res.status(202).send('Atualizado') })
			.catch(errorServer => { return res.status(500).send(errorServer) })
	}

	return { newCategory, updateCategory }
}