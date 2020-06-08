const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
	const { existsOrError, notExistsOrError, existsInDatabase } = app.api.validation
	const { onlyDate, onlyTime, dateAndTime } = app.api.date

	const saveOrUpdate = async (req, res) => {		
		const user = { ...req.body }
		
		const encryptPassword = password => {
			let salt = bcrypt.genSaltSync(10)
			return bcrypt.hashSync(password, salt)
		}

		//TRANSFORMAÇÂO DADOS EM MINUSCULO
		if(user.username) user.username = user.username.toLowerCase()
		if(user.email) user.email = user.email.toLowerCase()
		//CREATE
		if(!user.user_id){
			//VALIDACAO PARA CREATE
			try {
				existsOrError(user.username, 'Usuário não definido!')
				existsOrError(user.email, 'Email não definido!')
				existsOrError(user.password, 'Defina uma senha!')
				existsOrError(user.confirmPassword, 'Repita sua senha!')
				if(user.password !== user.confirmPassword) throw 'Senhas não conferem!'


			} catch (error) {
				return res.status(400).send(error)
			}
		}

		//CRIPTOGRAFAR SENHA E RETIRAR A CONFIRMAÇAO ANTES DO ENVIO
		user.password = encryptPassword(user.password)
		delete user.confirmPassword
		
			//SERA UM UPDATE OU CREATE ???
		try {
			if(user.user_id) { //UPDATE
				user.username = undefined
				user.email = undefined
				user.created_in = 
				console.log(user)
				//UPDATE
				existsOrError(
				await existsInDatabase('users','user_id', 'user_id', user.user_id), 
				'ID não encontrado!')
				app.db('users')
					.update(user)
					.where({user_id: user.user_id})
					.then(() => res.status(204))
					.catch(error => res.status(500).send(error))

				return res.send('Update com sucesso')

			} else { 	//CREATE
				
					//VALIDAÇÂO
				notExistsOrError(await existsInDatabase('users', 'username','username', user.username),
				'Usuário já está cadastrado!')

				notExistsOrError(await existsInDatabase('users', 'email','email', user.email),
				'Email já cadastrado!')

				user.deleted_at = false
				user.created_in = dateAndTime()

				console.log(await user)
				app.db('users')
					.insert(user)
					.then(() => res.status(204).res.send('Criado com sucesso'))
					.catch(error => res.status(500).send(error))
				return
			}
		} catch (error) {

			return res.status(201).send(error)

		}
	}
	const deletedUser = async (req, res) => {
		const { onlyDate, onlyTime, dateAndTime } = app.api.date
		user = {}
		user.user_id = await req.body.user_id 
		user.deleted = await req.body.deleted

		try {
			existsOrError(user.user_id, 'É necessário o ID do usuário')
			if(user.deleted===undefined) throw 'Defina VERDADEIRO ou FALSO'
			existsOrError(await existsInDatabase('users', 'user_id', 'user_id', user.user_id)
			, 'ID não encontrado para remover')
			await app.db('users')
					.update({'deleted': user.deleted})
					.where({ user_id: user.user_id })
					.then(() => res.status(202))
					.catch(error => res.status(400).send(error))
			return res.send('Usuário apagado')
		} catch(error) {
			return res.status(400).send(error)
		}
	
	}
	return { saveOrUpdate, deletedUser }
}