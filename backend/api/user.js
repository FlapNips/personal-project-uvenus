const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
	const { 
		existsOrError, 
		notExistsOrError, 
		existsInDB,
		updateValidation } = app.api.validation
	const { onlyDate, onlyTime, dateAndTime } = app.api.date

	const createUser = async (req, res) => {
		const user = { ...req.body }

		//CLEAR DATA
		delete user.user_id
		delete user.last_update
		user.points = 0
		user.rank = 1
		user.admin = false
		user.deleted = false
		user.created_in = dateAndTime()

		//PRE DEFINITIONS
		const encryptPassword = password => {
				let salt = bcrypt.genSaltSync(10)
				return bcrypt.hashSync(password, salt)
			}
		if(user.username) user.username = user.username.toLowerCase()
		if(user.email) user.email = user.email.toLowerCase()

		//CONDITIONS CREATE
		try {
			notExistsOrError(await existsInDB('users', 'username','username', user.username),
				'Usuário já está cadastrado!')

			notExistsOrError(await existsInDB('users', 'email','email', user.email),
				'Email já cadastrado!')
			existsOrError(user.username, 		'Usuário não definido!')
			validateUsername(user.username, 	'Usuário inválido')
			existsOrError(user.email, 			'Email não definido!')
			validateEmail(user.email,			'Email inválido!')
			existsOrError(user.password, 		'Defina uma senha!')
			existsOrError(user.confirmPassword, 'Repita sua senha!')
			if(user.password !== user.confirmPassword) throw 'Senhas não conferem!'
		} catch (error) {
			return res.status(400).send(error)
		}
		//PREPARATION DATA
		delete user.confirmPassword
		user.password = encryptPassword(user.password)

		//FINISH CREATE
		app.db('users')
			.insert(user)
			.then(() => res.status(201).send('Criado com sucesso'))
			.catch(error => res.status(500).send(error))
		return 
	}

	const updateUser = async (req, res) => {
		let user = { ...req.body }
		user.user_id = parseInt(req.params.user_id)
		
		//VALIDATION EXISTS USER ID
		try {
			existsOrError(await user.user_id, 'Informe o ID')
			existsOrError(await existsInDB('users', 'user_id', 'user_id', user.user_id), 'ID NAO EXISTE')
		} catch(error) {
			return res.status(400).send(error)
		}
		const userDB = await app.db('users')
						.where({ user_id: user.user_id})
						.then(data => data[0])
						.catch(error => console.log(error))
		//UPDATE GENERAL
		try {
			if(user.update_general) {
				updateValidation.username(user.username)
				updateValidation.password(user.password)
				updateValidation.email(user.email)
			}
		} catch(error) {
			return res.status(400).send(error)
		}
		//UPDATE PERSONAL INFORMATION
		try {
			if(user.update_personal_information) {
				updateValidation.full_name(user.full_name)
				updateValidation.age(user.age)
				updateValidation.state(user.state)
				updateValidation.city(user.state, user.city)
				updateValidation.college(user.state, user.college)
				updateValidation.course(user.course)		
			}
		} catch(error) {
			return res.status(400).send(error)
		}
		//UPDATE USERS WITH ADMIN TRUE
		
		return res.status(200).send('Atualizado com Sucesso')
	}


	const deletedUser = async (req, res) => {
		let user = {}
		user.user_id = req.params.user_id
		user.deleted = req.body.deleted

		try {
			existsOrError(user.user_id, 'É necessário o ID do usuário')
			existsOrError(await existsInDB('users', 'user_id', 'user_id', user.user_id)
			, 'ID não encontrado para remover')
			if(user.deleted===undefined) throw 'Defina VERDADEIRO ou FALSO para DELETAR CONTA'
			await app.db('users')
					.update({'deleted': user.deleted})
					.where({ user_id: user.user_id })
					.then(() => res.status(202))
					.catch(error => res.status(500).send(error))
		} catch(error) {
			return res.status(400).send(error)
		}
		return user.deleted ? res.send('Deletado com sucesso!') : res.send('Conta ativa!')
	
	}
	const bannedUser = (req, res) => {
		let user = {}
		user.user_id = req.params.user_id
		user.banned = req.body.banned
		
		try {
			existsOrError(user.user_id, 'É necessário o ID do usuário')
			existsOrError(await existsInDB('users', 'user_id', 'user_id', user.user_id)
			, 'ID não encontrado para remover')
			if(user.banned === undefined) throw 'Defina se o usuário será deletado ou não'
		} catch(error) {
			return res.status(400).send(error)
		}
		return user.banned ? res.send('Banido com Sucesso') : res.send('Usuário desbanido')
	}
	
	return { createUser, updateUser, bannedUser, deletedUser }
}