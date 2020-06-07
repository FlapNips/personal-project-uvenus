const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
	const { existsOrError, notExistsOrError, existsInDatabase } = app.api.validation

	const saveOrUpdate = async (req, res) => {		
		const user = { ...req.body }
		
		const encryptPassword = password => {
			let salt = bcrypt.genSaltSync(10)
			return bcrypt.hashSync(password, salt)
		}

		console.log(await existsInDatabase('user_id', 'user_id', 1))
		//TRANSFORMAÇÂO DADOS EM MINUSCULO
		user.username = user.username.toLowerCase()
		user.email = user.email.toLowerCase()

		//CREATE
		if(!user.user_id){
			//VALIDACAO PARA CREATE
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
		}

		//CRIPTOGRAFAR SENHA E RETIRAR A CONFIRMAÇAO ANTES DO ENVIO
		user.password = encryptPassword(user.password)
		delete user.confirmPassword
		
		try {
			//SERA UM UPDATE OU CREATE ???
			if(user.user_id) { 
				//UPDATE
				app.db('users')
					.update(user)
					.where({user_id: user.user_id})
					.then(()=> res.status(204).send())
					.catch(error=> res.status(500).send('ERRO AO ATUALIZAR!'))
				return res.send('Update com sucesso')
			} else { 	
				//VALIDAÇÂO
				notExistsOrError(await existsInDatabase('username','username', user.username), 'Usuário já está cadastrado!')
				notExistsOrError(await existsInDatabase('email','email', user.email), 'Email já cadastrado!')
				//CREATE
				app.db('users')
					.insert(user)
					.then(() => res.status(204).send())
					.catch(error => res.status(500).send(error))
				return res.send('Criado com sucesso')
	
			}
		} catch (error) {
			return res.status(201).send(error)
		}
		

	}
	const removeUser = async (req, res) => {
		user = { ...req.body }
		console.log(user)
		try {
			existsOrError(user.user_id, 'É necessário o ID do usuário')
			await app.db('users')
					.where({ user_id: user.user_id })
					.del()
		} catch(error) {
			return res.status(400).send(error)
		}
		return res.send('Usuário apagado')
	
	}
	return { saveOrUpdate, removeUser }
}