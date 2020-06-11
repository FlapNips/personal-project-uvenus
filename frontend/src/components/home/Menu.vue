<template>
	<b-container id="menu-home" fluid class="m-0 p-0">
		<b-row class="h-100 m-0">
			<b-button-group class="ml-auto mr-5 my-auto">
				<b-button v-for="button in buttons" :key="button.name"
					class="btn btn-primary mx-2">
					{{button.name}}
				</b-button>
			</b-button-group>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		data() {
			return {
				buttons : [
					{ name: 'O que é Uvenus?', route: ''	},
					{ name: 'Sobre Nós', route: ''	},
					{ name: 'Novidades', route: ''	},
					{ name: 'Entrar', route: ''	}
				]
			}
		}
	}
</script>
<style lang="scss">

#menu-home {
	height: 5em;
	background-color: rgb(14, 14, 14);
	border-bottom: 2px solid yellow;
}
</style>