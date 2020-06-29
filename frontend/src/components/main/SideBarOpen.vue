<template>
	<b-sidebar
	id="sidebar-open" 
	:visible="slideBar" 
	left
	no-header>
		<b-container fluid>
			<b-row id="status-profile" class="my-3">
				<b-col cols="5">
					<b-img src="../../assets/profile.png" class="image-profile"/>
				</b-col>
				<b-col cols="7">
					<b-container fluid>
						<b-row class="px-3">
							<h2 class="mx-auto">@FlapNips</h2>
						</b-row>
						<b-row class="px-3">
							<b-col cols="8" class="mx-auto">
								<b-img src="@/assets/RANK.svg" fluid class="mx-auto"/>
							</b-col>
							<b-col cols="12" class="mx-auto">
								<h3 class="text-center">3567</h3>
							</b-col>
						</b-row>
					</b-container>
				</b-col>
			</b-row>
			<b-row v-for="options in menu" :key="options.name">
				<b-col :id="options.name" cols="12">
					<b-button @click="options.collapsed = !options.collapsed" class="col-12 my-2">
						<b-icon :icon="options.icon" class="h1 my-auto mr-3"/>
						{{ options.name }}
					</b-button>
					<b-collapse v-model="options.collapsed" class="text-center">
						<b-button v-for="submenu in options.children" :key="submenu.name" class="col-10 mx-auto my-2">
							{{ submenu.name }}
						</b-button>
					</b-collapse>
				</b-col>
			</b-row>
			<b-row>
				<b-button class="button-sidebar" @click="executeChangeSlideBar()">
					<b-icon icon="chevron-double-right" class="mx-auto h1"/>
				</b-button>
			</b-row>
		</b-container>
	</b-sidebar>
</template>

<script>
export default {
	props: {
		slideBar: {
			type: Boolean,
			required: true,
			default: false
		},
		menu: {
			type: Array,
			require: true
		},
		changeSlideBar: {
			type: Function,
		}
	},
	methods: {
		executeChangeSlideBar() {
			if(this.changeSlideBar) {
				this.changeSlideBar()
			}
		
		}
	}
}
</script>

<style>
</style>