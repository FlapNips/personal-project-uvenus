<template>
	<b-container id="menu-home" fluid class="m-0 p-0">
		<b-row class="h-100 m-0">
			<b-img src='@/assets/logo-light.png' class="p-1 m-0 ml-5 h-100"/>
			<b-button-group class="ml-auto mr-5 my-auto">
					<router-link v-for="button in buttons" :key="button.name" :to="button.route">
						<b-button class="btn mx-3">
							{{button.name}}
						</b-button>
					</router-link>
			</b-button-group>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		data() {
			return {
				buttons : [
					{ name: 'O que é Uvenus?', route: '/'	},
					{ name: 'Sobre Nós', route: '/sobre'	},
					{ name: 'Novidades', route: '/novidades'	},
					{ name: 'Entrar / Registrar', route: '/entrar'	}
				],
				teste: false
			}
		}
	}
</script>
<style lang="scss">

#menu-home {
	height: 10vh;
	flex-grow: 1;
	background-color: $color_secondary;
	border-bottom: 2px solid yellow;
}

.btn {
	background-color: transparent;
	font-size: 1.2em;
	border: 0;
	&:hover {
		color: $color_primary;
		background-color: transparent;
	} 
}
</style>