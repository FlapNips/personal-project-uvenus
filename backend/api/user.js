const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
	const { existsOrError, notExistsOrError } = app.api.validation


	const saveOrUpdate = async (req, res) => {
		
		//DADOS ENVIADOS SALVOS EM UMA CONSTANTE
		const user = { ...req.body }
		
		
		//CRIPTOGRAFAR A SENHA
		const encryptPassword = password => {
			let salt = bcrypt.genSaltSync(10)
			return bcrypt.hashSync(password, salt)
		}

		//POSSUI CAMPO VAZIO ?
		try {
			existsOrError(user.username, 'Usuário não definido!')
			existsOrError(user.email, 'Email não definido!')
			existsOrError(user.password, 'Defina uma senha!')
			existsOrError(user.confirmPassword, 'Repita sua senha!')
			existsOrError(user.age, 'Idade não definido!')
			existsOrError(user.full_name, 'Nome Completo não definido!')
			if(user.password !== user.confirmPassword) throw 'Senhas não conferem!'


		} catch (error) {
			return res.status(400).send(error)
		}

		//TRANSFORMAÇÂO DO USUARIO & EMAIL
		user.username = user.username.toLowerCase()
		user.email = user.email.toLowerCase()

		//VALIDAÇÂO DE EXISTENCIA NO BANCO DE DADOS
		existInDatabase = (column, value) => {
			return app.db('users')	
					.select(column)
					.where({ email: value })
					.orWhere({ username: value })
					.first()
		}

		try {
			//VALIDAÇÂO
			notExistsOrError(await existInDatabase('username', user.username), 'Usuário cadastrado!')
			notExistsOrError(await existInDatabase('email', user.email), 'Email cadastrado!')

			//CRIPTOGRAFAR SENHA E RETIRAR A CONFIRMAÇAO ANTES DO ENVIO
			user.password = encryptPassword(user.password)
			delete user.confirmPassword

			//SERA UM UPDATE OU CREATE ???

			if(user.user_id) { 		//UPDATE
				app.db('users')
					.update(user)
					.where({user_id: user.user_id})
					.then(()=> res.status(204).send('Atualizado!'))
					.catch(error=> res.status(500).send('ERRO AO ATUALIZAR!'))
				console.log('ATUALIZADO')
			} else { 				//CREATE
				app.db('users')
					.insert(user)
					.then(() => res.status(204).send())
					.catch(error => res.status(500).send(error))
				console.log('CRIADO')
			}
		} catch (error) {
			return res.status(201).send(error)
		}
		

	}
	const remove = (req, res) => {
		user = { ...req.body }

		try {
			existsOrError(user.user_id, 'É necessário o ID do usuário')
			app.db('users')
				.where({ user_id: user.user_id })
				.del()
		} catch(error) {
			return res.status(400).send(error)
		}
	
	
	}
	return { saveOrUpdate, remove }
}