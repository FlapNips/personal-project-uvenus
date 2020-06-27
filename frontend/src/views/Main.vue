<template>
	<b-row id="view-main-layout" class="m-0 p-0 ml-auto">
		<div id="view-sidebar-menu" class="m-0 p-0">
			<SideBar/>
		</div>
		<b-container id="view-main-division" fluid class="p-0">
			<b-row id="view-main-menu-top" class="p-0 m-0">
				<MenuTop/>
			</b-row>
			<b-row id="view-main-content" class="p-0">
				<Content/>
				<MenuRight/>
			</b-row>
		</b-container>
	</b-row>
</template>

<script>
import SideBar from '@/components/main/SideBar'
import MenuTop from '@/components/main/MenuTop'
import Content from '@/components/main/Content'
import MenuRight from '@/components/main/MenuRight'

export default {
	components: { 
	SideBar, 
	MenuTop, 
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
		overflow: auto;
		flex-grow: 0;
		right: 0;
		margin-left: 3%;
		height: 100%;
		width: 97vw;
		max-width: 100%;
		#view-main-menu-top {
			position: relative;
			height: $menuTopHeight;
			min-height: max-content;
		}
		#view-main-content {
			position: relative;
			height: 100%;
			min-height: calc(100vh - $menuTopHeight);
			margin: $menuTopHeight 0 0 0;
			background-color: rgb(48, 206, 88);
		}
	}
}

</style>