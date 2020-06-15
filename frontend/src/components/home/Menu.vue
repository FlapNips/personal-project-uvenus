<template>
	<b-row id="menu-layout" class="m-0">
		<b-button-group class="ml-auto mrl-5 my-auto">
			<router-link v-for="button in buttons" :key="button.name" :to="button.route">
				<b-button class="btn mx-3">
					{{button.name}}
				</b-button>
			</router-link>
		</b-button-group>
	</b-row>
</template>

<script>
	export default {
		data() {
			return {
				buttons : [
					{ name: 'HOME', route: '/'	},
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

#menu-layout {
	min-height: max-content;
	height: 5vh;
}
#buttons-layout {
	background-color: $color_2;
	border-bottom: 4px solid $color_1;
}
.teste {
	height: max-content;
}
.btn {
	background-color: transparent;
	color: black;
	font-size: 1.0em;
	border: 0;
	&:hover {
		color: $color_3;
		background-color: transparent;
	} 
}
</style>