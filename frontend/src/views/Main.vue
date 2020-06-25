<template>
	<b-row id="view-main-layout" class="m-0 p-0 ml-auto">
		<div id="view-sidebar-menu" class="m-0 p-0">
			<SideBar/>
		</div>
		<b-container id="view-main-division" fluid class="p-0">
			<Menu/>
			<b-row id="view-main-content" class="p-0">
				<Content/>
				<MenuRight/>
			</b-row>
		</b-container>
	</b-row>
</template>

<script>
import SideBar from '@/components/main/SideBar'
import Menu from '@/components/main/Menu'
import Content from '@/components/main/Content'
import MenuRight from '@/components/main/MenuRight'

export default {
	components: { 
	SideBar, 
	Menu, 
	Content, 
	MenuRight }
}
</script>

<style lang="scss">


#view-main-layout {
	overflow: auto;
	background-color: wheat;
	width: 100vw;
	max-width: 100%;
	height: 100%;
	#view-sidebar-menu {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 3vw;
		background-color: $fifth;
		height: 100vh!important;
	}

	#view-main-division {
		position: relative;
		flex-grow: 0;
		right: 0;
		margin-left: 3%;
		height: 100%;
		width: 97vw;
		max-width: 100%;
		#view-main-content {
			position: relative;
			height: 100%;
			min-height: calc(100vh - 3em);
			margin: 3em 0 0 0;
			background-color: rgb(48, 206, 88);
		}
	}
}

</style>