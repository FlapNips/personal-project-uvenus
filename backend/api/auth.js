const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

	const signIn = async (req, res) => {
		username = req.body.username
		password = req.body.password

		if(username) username = username.toLowerCase()

		if(!username && !password) {
			return res.status(400).send('Senha não informada')
		}
		const user = await app.db('users')
							.where({ username: username })
							.first()

		if(!user) return res.status(400).send('Usuário não encontrado')
	
		const isMatch = bcrypt.compareSync( password, user.password)

		if(!isMatch) return res.status(401).send('Senha não confere!')
		
		const now = Math.floor(Date.now() / 1000)

		const payload = {
			id: user.user_id,
			username: user.username,
			email: user.email,
			admin: user.admin,
			deleted: user.deleted,
			iat: now,
			exp: now + ( 60)
		}

		res.json({
			...payload,
			token: jwt.encode(payload, authSecret)
		})
	}

	const validateToken = (req, res) => {
		const userData = req.body || null

		try {
			if(userData) {
				const token = jwt.decode(userData.token, authSecret)
				if(new Date(token.exp * 1000 > new Date())) {
					return res.send(true)
				}
			}
		} catch(error) {
		
		}
		res.send(false)
	}

	return { signIn, validateToken}
}