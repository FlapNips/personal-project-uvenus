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

		//VALIDAÇÂO DE EXISTENCIA
		validateUsername = () => {
			return app.db('users')	
					.select('username')
					.where({ username: user.username })
					.first()

		}
		validadeEmail = () => {
			return app.db('users')	
					.select('email')
					.where({ email: user.email })
					.first()
		}

		try {
			//VALIDAÇÂO
			notExistsOrError(await validateUsername(), 'Usuário cadastrado!')
			notExistsOrError(await validadeEmail(), 'Email cadastrado!')

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

	return { saveOrUpdate }
}