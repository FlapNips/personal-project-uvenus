<template>
	<b-row class="my-auto  h-75 m-0 p-0">
		<b-col cols="5" class="mx-auto my-auto">
			<b-col cols="10" class="mx-auto">
				<b-img id="image-perfil" src="@/assets/profile.png" class="mx-auto"/>
			</b-col>
			<b-form-group>
				<b-input-group prepend="@" class="my-4">
					<b-form-input 
					v-model="login.username"
					placeholder="Usuário"
					class="formulario-login"/>
				</b-input-group>
				<b-form-input 
				v-model="login.password"
				placeholder="Senha"
				type="password"
				class="formulario-login"/>
				<b-row class="px-4 my-4">
					<b-form-checkbox
					v-model="checked"
					class="formulario-login my-auto"
					size="lg"
					switch>
						Entrar Automaticamente
					</b-form-checkbox>
					<b-btn
					@click="userLogin(login.username, login.password)"
					class="ml-auto btn-success"
					size="lg">
						ENTRAR
					</b-btn>
				</b-row>
			</b-form-group>
			<div class="separator"> OU </div>
			<b-row class="px-3">
				<router-link to="/recuperar" class="mr-auto">
					ESQUECEU A SENHA ?
				</router-link>
				<router-link to="/cadastro" class="ml-auto">
					JUNTE-SE A NÓS !
				</router-link>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
const axios = require('axios').default;
axios.defaults.baseURL = 'http://localhost:3000';

export default {
	data() {
		return {
			checked : false,
			login: [
				{ username: '' },
				{ password: '' }
			]
		}
	},
	methods: {
		userLogin(user, password) {
			axios.post('/conectar', {
				username: user,
				password: password
			}).then( resp => {
				if(resp.status === 200) {
					this.$router.push('/')
				}
			}).catch( error => {
				console.log(error)
			})
		}
	}
}
</script>

<style lang="scss">
#image-perfil {
	max-width: 100%;
	max-height: 100%;
}
.input-group-text {
	font-size: 1.6rem!important;
}
.formulario-login {
	font-size: 1.6rem!important;
}
.separator {
    display: flex;
	font-size: 1.6rem!important;
    align-items: center;
    text-align: center;
}
.separator::before, .separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #000;
}
.separator::before {
    margin-right: .25em;
}
.separator::after {
    margin-left: .25em;
}
</style>