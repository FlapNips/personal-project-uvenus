<template>
	<b-row class="sign-layout m-0 p-5">
		<b-row class="box-content">
			<b-col cols="5" class="main-content ml-auto p-0">
				<div class="col-12 mx-auto text-center">ENTRAR</div>
				<b-img src="https://picsum.photos/125/125/?image=58" center rounded="circle"
				class="my-2"/>
				<b-form-group class="m-0 p-0">
					<b-row>
						<b-form-input placeholder="Usuário" class="col-10 mx-auto my-3"/>
						<b-form-input placeholder="Senha" class="col-10 mx-auto my-3"/>
							<b-form-checkbox class="col-4 text-center mx-auto my-auto">Lembrar-me</b-form-checkbox>
							<b-button class="teste col-6 mx-auto p-0">Esqueceu Senha ?</b-button>
						<b-button class="teste ml-auto">ENTRAR</b-button>
					</b-row>
				</b-form-group>
			</b-col>
			<b-col cols="5" class="main-content mr-auto p-0">
				<b-form-group class="m-0 p-0 my-auto">
						<b-form-input placeholder="Usuário" class="col-10 mx-auto my-2"/>
						<b-form-input placeholder="Senha" class="col-10 mx-auto my-2"/>
				</b-form-group>
			</b-col>
		</b-row>
	</b-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.sign-layout {
	flex-grow: 1;
	.box-content {
		background-color: $color_3;
		height: 100%;
		transform: skewX(-10deg);
		transform-origin: bottom left;
	}
	.main-content {
		height: 100%;
		transform: skewX(10deg);
	}
}
</style>