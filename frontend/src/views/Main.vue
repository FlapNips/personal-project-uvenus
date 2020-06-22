<template>
	<b-container id="main-layout" fluid class="h-100 m-0 p-0">
		<b-col id="sidebar-menu">
			<sideBar/>
		</b-col>
		<b-col>
			
		</b-col>
	</b-container>
</template>

<script>
import sideBar from '@/components/main/SideBar'

export default {
	components: { sideBar }
}
</script>

<style lang="scss">

#main-layout {
	overflow: auto;
	background-color: wheat;
	max-width: 1920px;
	#sidebar-menu {
		background-color: blue;
		width: 3%;
		height: 100vh!important;
	}
	#main-content {
		height: 100%;
		width: 97%;
	}
}

</style>