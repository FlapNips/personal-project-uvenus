<template>
<div class="border-login">
    <slot></slot>
    <Username/>
    <Password/>
    <div class="input-group mx-auto justify-content-center m-1">
        <div class="col-12 m-1">
            <button :class="classRemember"
             class="col-12"
             @click="changeRemember">
				Lembrar-me
            </button>
        </div>
        <div class="col-12 m-1">
            <router-link to="/home">
                <button class="btn btn-primary col-12">
                    Entrar
                </button>
            </router-link>
        </div>
    </div>
    <div class="separator">
        OU
    </div>
    <div class="row justify-content-center">
        <div class="btn btn-link mx-auto m-2 col-6">
            Esqueceu a senha?
        </div>
        <div class="btn btn-link mx-auto m-2 col-6">
            <router-link to="/register">
            Junte-se a nós !
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import Username from './InputLoginUsername.vue'
import Password from './InputLoginPassword.vue'

export default {
    components: {
        Username,
        Password
    },
	data() {
		return {
			remember: false,
			classRemember: 'btn btn-danger'
		}
	},
	methods: {
		changeRemember() {
			this.remember = !this.remember;
			if(this.remember){
				this.classRemember = 'btn btn-success'
			} else {
				this.classRemember = 'btn btn-danger'
			}
		}
	}
}
</script>

<style scoped>
.border-login {
    border: 1px solid black;
    border-radius: 5%;
}
.separator {
    display    : flex;
    align-items: center;
    text-align : center;
}
.separator::before, .separator::after {
    content      : '';
    flex         : 1;
    border-bottom: 1px solid #000;
}
.separator::before {
    margin-right: .25em;
}
.separator::after {
    margin-left: .25em;
}
</style>