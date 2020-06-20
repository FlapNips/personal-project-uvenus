<template>
	<b-container id="main-layout" fluid class="h-100">
		<div id="sidebar-menu">
		</div>
		<b-row>
			
		</b-row>
	</b-container>
</template>

<script>
export default {

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