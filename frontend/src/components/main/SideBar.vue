<template>
	<b-container @mouseenter="slideBar = true" class="h-100 m-0 p-0">
		<b-row class="m-0 my-3 p-1">
			<b-img src="../../assets/Perfil.png" class="image-profile"/>
		</b-row>
		<b-row v-for="icon in icons" :key="icon.name" class="m-0 p-0">
			<b-icon :icon="icon.name" class="icon-layout h1 mx-auto my-5"/>
		</b-row>
		<div @mouseleave="changeSlideBar()">
			<b-sidebar 
				id="sidebar-left" 
				:visible="slideBar" 
				left
				no-header>
				<b-container fluid>
					<b-row id="status-profile" class="my-3">
						<b-col cols="5">
							<b-img src="../../assets/Perfil.png" class="image-profile"/>
						</b-col>
						<b-col cols="7">
							<b-container fluid>
								<b-row class="px-3">
									<h2 class="mx-auto">@FlapNips</h2>
								</b-row>
								<b-row class="px-3">
									<b-col cols="8" class="mx-auto">
										<b-img src="../../assets/RANK.svg" fluid class="mx-auto"/>
									</b-col>
									<b-col cols="12" class="mx-auto">
										<h3 class="text-center">3567</h3>
									</b-col>
								</b-row>
							</b-container>
						</b-col>
					</b-row>
					<b-row v-for="(options, index) in menu" :key="options.name">
						<b-col :id="options.name" cols="12">
							<b-button @click="options.collapsed = !options.collapsed" class="col-12 my-2">
								<b-icon :icon="icons[index].name" class="h1 my-auto mr-3"/>
								{{ options.name }}
							</b-button>
							<b-collapse v-model="options.collapsed" class="text-center">
								<b-button v-for="submenu in options.children" :key="submenu.name" class="col-10 mx-auto my-2">
									{{ submenu.name }}
								</b-button>
							</b-collapse>
						</b-col>
					</b-row>
				</b-container>
			</b-sidebar>
		</div>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			slideBar: false,
			icons: [
				{name: 'person-lines-fill'},
				{name: 'bookmarks'},
				{name: 'newspaper'},
				{name: 'trophy'},
				{name: 'shop'},
				{name: 'tools'}
			],
			menu: [
				{name: 'teste', children: [
						{ name: 'submenu 1', router: '' },
						{ name: 'submenu 2', router: '' },
						{ name: 'submenu 3', router: '' },
						{ name: 'submenu 4', router: '' }
					], collapsed: false},
				{name: 'teste2', children: [
						{ name: 'submenu 5', router: '' },
						{ name: 'submenu 6', router: '' },
						{ name: 'submenu 7', router: '' },
						{ name: 'submenu 8', router: '' }
					], collapsed: false},
				{name: 'teste3', children: [
						{ name: 'submenu 9', router: '' },
						{ name: 'submenu 10', router: '' },
						{ name: 'submenu 11', router: '' },
						{ name: 'submenu 12', router: '' }
					], collapsed: false}
		
			]
		}
	},
	methods: {
		changeSlideBar() {
			console.log('FOI' + this.slideBar)
			return this.slideBar = !this.slideBar
		}
	}
}
</script>

<style lang="scss">
.image-profile {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
#status-profile {
	border-bottom: 2px solid $primary;

}
.icon-layout {
	max-zoom: 100%;
}
</style>