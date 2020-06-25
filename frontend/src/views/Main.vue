<template>
	<b-row id="main-layout" class="m-0 p-0 ml-auto">
		<div id="sidebar-menu" class="m-0 p-0">
			<SideBar/>
		</div>
		<b-container id="main-division" fluid class="m-0 ml-auto p-0">
			<Menu/>
			<b-row id="main-content" class="p-0">
				<b-col cols="10" class="m-0 p-5">
					<Content/>
				</b-col>
				<b-col cols="2" class="m-0 p-0">
					<MenuRight/>
				</b-col>
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

#main-layout {
	overflow: hidden;
	background-color: wheat;
	width: 100vw;
	max-width: 100%;
	height: auto;
	#sidebar-menu {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 3%;
		background-color: $fifth;
		height: 100vh!important;
	}
	#main-division {
		position: relative;
		flex-grow: 0;
		width: 97%;
		height: 100%;
		#main-content {
			overflow-y: hidden;
			margin: 5vh 0 0 0;
			min-height: 95vh;
			height: 100%;
			background-color: rgb(48, 206, 88);
		}
	}
}

</style>