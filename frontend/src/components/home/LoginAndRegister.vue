<template>
	<b-container id="content-login align-self-center">
		<b-row class="mt-auto">
			<b-col cols="4" class="mx-auto">
				<b-img id="image-perfil" src="@/assets/Perfil.png" class="mx-auto"/>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="5" class="mx-auto">
				<b-form-group>
					<b-input-group prepend="@" class="my-4">
						<b-form-input placeholder="Usuário" class="formulario-login"/>
					</b-input-group>
					<b-form-input placeholder="Senha" type="password" class="formulario-login"/>
					<b-row class="px-4 my-4">
						<b-form-checkbox 
						v-model="checked" 
						class="formulario-login my-auto"
						size="lg"
						switch>
							Entrar Automaticamente
						</b-form-checkbox>
						<b-btn class="ml-auto" size="lg">ENTRAR</b-btn>
					</b-row>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="mx-auto mb-auto">
			<div class="separator"> OU </div>
		</b-row>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			checked : false,
		}
	}
}
</script>

<style lang="scss">

#content-login {
	position: relative;
	flex-direction: column;
	top: 0;
	bottom: 0;
	margin: auto 0 auto 0!important;

}
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