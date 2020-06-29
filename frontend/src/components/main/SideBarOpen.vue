<template>
	<b-sidebar
	class="w-100"
	:visible="slideBar"
	@click="executeChangeSlideBar()"
	no-header>
		<b-row id="status-profile" no-gutters class="my-3">
			<b-col cols="5" class="p-2">
				<b-img src="@/assets/profile.png" class="image-profile m-0 p-0"/>
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
		<b-row v-for="options in menu" :key="options.name" no-gutters>
			<b-col :id="options.name" cols="10" class="mx-auto">
				<b-button @click="options.collapsed = !options.collapsed" class="col-12 my-2">
					<b-icon :icon="options.icon" class="h1 my-auto mr-3"/>
					{{ options.name }}
				</b-button>
				<b-collapse v-model="options.collapsed" class="text-center" accordion="uniqueCollapse">
					<b-button v-for="submenu in options.children" :key="submenu.name" class="col-10 mx-auto my-2">
						{{ submenu.name }}
					</b-button>
				</b-collapse>
			</b-col>
		</b-row>
		<template v-slot:footer>
			<b-row no-gutters="" class=" h-100">
				<b-col cols="12" class="mx-auto h-100">
					<b-button class="button-sidebar h-100" @click="executeChangeSlideBar()">
						<b-icon icon="chevron-double-left" class="mx-auto h1"/>
					</b-button>
				</b-col>
			</b-row>
		</template>
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
			console.log('aqui foi')
			if(this.changeSlideBar) {
				this.changeSlideBar()
			}
		
		}
	}
}
</script>

<style lang="scss">
.b-sidebar-body {
	background-color: $primary_low;
}
.b-sidebar-footer {
	height: 7em;
}
.image-profile  {
	width: 100%;
	max-width: 100%!important;
	max-height: 100%!important;
}
</style>