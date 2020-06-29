<template>
	<b-row align-content="stretch" align-v="stretch" no-gutters class="component-sidebar">
		<b-col cols="12" class="my-auto p-1">
			<b-img src="@/assets/profile.png" class="image-profile"/>
		</b-col>
		<!--- BUTTONS V-FOR-->
		<router-link v-for="button in menu" :key="button.name" 
		:id="`button-${button.name}`"
		:to="button.router"
		tag="img"
		:src="button.icon"
		class="button-sidebar p-3">
			<b-col class="p-0">
				<b-tooltip
					:target="`button-${button.name}`"
					noninteractive
					placement="right"
					triggers="hover">
					{{ button.name }}
				</b-tooltip>
			</b-col>
		</router-link>
		<b-button id="button-Expand" class="button-sidebar" @click="changeSlideBar()">
			<b-icon icon="chevron-double-right" class="mx-auto h1"/>
			<b-tooltip
				target="button-Expand"
				noninteractive
				placement="right"
				triggers="hover">
					Expandir
			</b-tooltip>
		</b-button>
		<SideBarOpen :slideBar="slideBar" :menu="menu" :changeSlideBar="changeSlideBar"/>
	</b-row>
</template>

<script>
import SideBarOpen from './SideBarOpen.vue'

export default {
	components: {
		SideBarOpen
	},
	data() {
		return {
			slideBar: false,
			menu: [
					{
					name: 'Pessoal',
					icon: require('@/assets/icon-personal.svg'),
					router: '/user',
					collapsed: false,
					children: [
						{ name: 'submenu 1', router: '' },
						{ name: 'submenu 2', router: '' },
						{ name: 'submenu 3', router: '' },
						{ name: 'submenu 4', router: '' }
					]
				},
					{	
					name: 'Curso',
					icon: require('@/assets/icon-course.svg'),
					router: '/course',
					collapsed: false,
					children: [
						{ name: 'submenu 11', router: '' },
						{ name: 'submenu 22', router: '' },
						{ name: 'submenu 33', router: '' },
						{ name: 'submenu 44', router: '' }
					]
				},
					{	
					name: 'Universidade',
					icon: require('@/assets/icon-university2.svg'),
					router: '/news',
					collapsed: false,
					children: [
						{ name: 'submenu 15', router: '' },
						{ name: 'submenu 26', router: '' },
						{ name: 'submenu 37', router: '' },
						{ name: 'submenu 48', router: '' }
					]
				},
					{	
					name: 'Configurações',
					icon: require('@/assets/icon-config.svg'),
					router: '/configuration',
					collapsed: false,
					children: [
						{ name: 'submenu 17', router: '' },
						{ name: 'submenu 28', router: '' },
						{ name: 'submenu 39', router: '' },
						{ name: 'submenu 40', router: '' }
					]
				},
			]
		}
	},
	methods: {
		changeSlideBar() {
			return this.slideBar = !this.slideBar
		},
		getIcon(button) {
			return require(button.icon)
		}
	}
}
</script>

<style lang="scss">
.component-sidebar {
	position: fixed;
	width: 5em;
	min-height: 100%;
	.image-profile {
	width: 100%;
	max-width: inherit;
	max-height: inherit;
	}
	.button-sidebar {
		width: 100%;
		border: 0;
		border-radius: 0;
		background-color: $primary_medium;
		&:hover {
		background-color: $primary;
		color: $secondary;
		cursor: pointer;
		}

	}
	#status-profile {
		border-bottom: 2px solid $primary;

	}
	.router-link-exact-active {
		background-color: $primary;
		color: $secondary;
		border-radius: 0;
	}

}
</style>