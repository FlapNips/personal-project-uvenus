const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
	const { existsOrError, notExistsOrError } = app.api.validation
	const {toLowercase } = app.api.transformer


	const saveOrUpdate = async (req, res) => {
		
		//DADOS ENVIADOS SALVOS EM UMA CONSTANTE
		const user = { ...req.body }
		
		//TRANSFORMAÇÂO DO USUARIO & EMAIL
		toLowercase(user.username, user.email)
		//CRIPTOGRAFAR A SENHA
		const encryptPassword = password => {
			let salt = bcrypt.genSaltSync(10)
			return bcrypt.hashSync(password, salt)
		}

		//TESTE DE EXISTENCIA DOS CAMPOS
		if(!user.user_id) {
			try {
				existsOrError(user.username, 'Usuário não definido!')
				existsOrError(user.email, 'Email não definido!')
				existsOrError(user.password, 'Defina uma senha!')
				existsOrError(user.confirmPassword, 'Repita sua senha!')
				existsOrError(user.age, 'Idade não definido!')
				existsOrError(user.fullname, 'Nome Completo não definido!')
				if(user.password !== user.confirmPassword) throw 'Senhas não conferem!'
			} catch (error) {
				res.status(201).send(error)
			}
		} else {
			app.data('users')
				.update()
				.where({user_id: user.user_id})
		
		}

		const validadeUsername = () => {
			const validade = app.db('users')
								.select('username')	
								.where(user.username)
								.first()
								.then(() => { return true })
								.catch(() => { return false })
			return validade
		}				
		const validadeEmail = () => {
			const validade = app.db('users')
								.select('username')	
								.where(user.email)
								.first()
								.then(() => { return true })
								.catch(() => { return false })
			return validade
		}				
		//CRIPTOGRAFAR SENHA E RETIRAR A CONFIRMAÇAO ANTES DO ENVIO
		user.password = encryptPassword(user.password)
		delete user.confirmPassword

		try {
			if(validadeUsername()) throw 'Usuário já cadastrado'
			if(validadeEmail()) throw 'Email já cadastrado'
			await app.db('users')
				.insert(user)
				.then(() => res.status(204).send('Cadastrado com sucesso'))
				.catch(error => res.status(500).send(error))
		} catch(error) {
			res.status(201).send(error)
		}
	}
	return { saveOrUpdate }
}