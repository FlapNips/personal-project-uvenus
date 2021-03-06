module.exports = app => {
	const { existsOrError, existsInDB } = app.api.validation
	const { dateAndTime } = app.api.date
	const { stringToBinary, binaryToString } = app.api.transformer

	const newArticle = (req, res) => {
		let data = {}

		data.article_name = req.body.article_name
		data.article_img = req.body.article_img
		data.article_description = req.body.article_description
		data.article_category_parent = req.body.article_category_parent
		data.article_content = stringToBinary(req.body.article_content)
		data.article_created_in = dateAndTime()

		//CONTENT TRANSFORMER TO BINARY

		try {
			existsOrError(data.article_name, 'Defina um nome para o Artigo')
			existsOrError(data.article_img, 'Defina uma imagem para o Artigo')
			existsOrError(data.article_description, 'Defina uma descrição para o Artigo')
			existsOrError(data.article_content, 'Define um conteudo para o Artigo')
			existsOrError(data.article_category_parent, 'Qual categoria pertence ?')
			if(isNaN(data.article_category_parent)) throw 'Qual o id da categoria ?' 

		} catch(errorClient	) {
		
			return res.status(400).send(errorClient)
		
		}

		app.db('articles')
			.insert(data)
			.then(() => res.status(201).send('Criado com sucesso'))
			.catch(errorServer => res.status(500).send(errorServer) + console.log(errorServer))
		return
	}

	const getArticle = async (req, res) => {
		const reference = req.params.article_id
		try {
			if(isNaN(reference)) throw 'Insira um ID válido'
			existsOrError(existsInDB('articles', 'article_id', 'article_id', reference)
			, 'Artigo não encotrado!')
		} catch(errorClient) {
			return res.status(400).send(errorClient)
		}

		const data = await app.db('articles')
						.where({ article_id: reference})
						.first()

		data.article_content = binaryToString(data.article_content)
		return res.status(202).send(data)
	}

	return { newArticle, getArticle }
}
