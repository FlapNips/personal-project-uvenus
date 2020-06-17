<template>
	<b-button-group>
		<b-button v-for="button in buttons" :key="button.name">
			{{ button.name }}
		</b-button>
	</b-button-group>
</template>

<script>
	export default {
		data() {
			return {
				buttons: [
					{name: 'Início', path: ''},
					{name: 'Sobre nós', path: ''},
					{name: 'Novidades', path: ''},
					{name: 'Entrar / Registrar', path: ''},
					{name: 'Menu5', path: ''},
					{name: 'Menu6', path: ''}
				]
			
			}
		}
	}
</script>

<style lang="scss">

</style>