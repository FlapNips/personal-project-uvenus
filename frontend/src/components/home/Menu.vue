<template>
<<<<<<< HEAD
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
=======
	<b-row id="menu-layout" class="m-0">
		<b-button-group class="ml-auto mrl-5 my-auto">
			<router-link v-for="button in buttons" :key="button.name" :to="button.route">
				<b-button class="btn mx-3">
					{{button.name}}
				</b-button>
			</router-link>
		</b-button-group>
	</b-row>
>>>>>>> parent of b7c8126... Revert "Ainda escolhendo layout"
</template>

<script>
	export default {
		data() {
			return {
				buttons : [
<<<<<<< HEAD
					{ name: 'O que é Uvenus?', route: ''	},
					{ name: 'Sobre Nós', route: ''	},
					{ name: 'Novidades', route: ''	},
					{ name: 'Entrar', route: ''	}
				]
=======
					{ name: 'HOME', route: '/'	},
					{ name: 'Sobre Nós', route: '/sobre'	},
					{ name: 'Novidades', route: '/novidades'	},
					{ name: 'Entrar / Registrar', route: '/entrar'	}
				],
				teste: false
>>>>>>> parent of b7c8126... Revert "Ainda escolhendo layout"
			}
		}
	}
</script>
<style lang="scss">

<<<<<<< HEAD
#menu-home {
	height: 5em;
	background-color: rgb(14, 14, 14);
	border-bottom: 2px solid yellow;
}
=======
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
>>>>>>> parent of b7c8126... Revert "Ainda escolhendo layout"
</style>