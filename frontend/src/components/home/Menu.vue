<template>
	<b-container fluid>
		<b-row>
			<b-button-group class="ml-auto mr-5 mt-2">
				<router-link 
				:id="`button-${button.css}`" 
				v-for="button in buttons" 
				:key="button.name" 
				class="style-menu mx-2 p-2 my-auto" 
				:to="button.path"> 
					{{ button.name }} 
				</router-link>
			</b-button-group>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		data() {
			return {
				buttons: [
					{name: 'Início', path: '/inicio', css: 'home'},
					{name: 'Sobre nós', path: '/sobre', css: 'about'},
					{name: 'Novidades', path: '/novidades', css: 'news'},
					{name: 'Entrar / Registrar', path: '/conectar', css: 'conect'}
				]
			
			}
		}
	}
</script>

<style lang="scss">
.style-menu {
	border: none;
	background-color: transparent;
	font-size: 1.8rem;
	color: $fourth;
	&:hover {
		border-radius: 5em!important;
		background-color: $fifth;
		color: $secondary;
		text-decoration-line: none;
	}
}
.router-link-exact-active {
	background-color: $fifth;
	color: $secondary;
	border-radius: 5em!important;
}

</style>