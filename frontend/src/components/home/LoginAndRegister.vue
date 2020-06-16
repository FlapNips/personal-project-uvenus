<template>
	<b-row id="sign-layout" class="m-0 py-5 p-0">
		<b-col cols="3" style="background-color: white" class="ml-auto my-auto mr-4 p-0">
			<div class="col-12 mx-auto">ENTRAR</div>
			<b-img src="https://picsum.photos/125/125/?image=58" center rounded="circle"
			class="my-2"/>
			<b-form-group class="m-0 p-0 my-auto col-12">
				<b-form-input placeholder="Usuário" class="col-10 mx-auto my-2"/>
				<b-form-input placeholder="Senha" class="col-10 mx-auto my-2"/>
				<b-form-radio>Lembrar-me</b-form-radio>
			</b-form-group>
		</b-col>
		<b-col cols="3" style="background-color: white" class="mr-auto ml-4 p-0">
			<b-form-group class="m-0 p-0 my-auto">
					<b-form-input placeholder="Usuário" class="col-10 mx-auto my-2"/>
					<b-form-input placeholder="Senha" class="col-10 mx-auto my-2"/>
			</b-form-group>
		</b-col>
	</b-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>