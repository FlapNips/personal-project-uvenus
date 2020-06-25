<template>
	<b-row id="main-layout" class="m-0 p-0 ml-auto">
		<div id="sidebar-menu" class="m-0 p-0">
			<SideBar/>
		</div>
		<b-container id="main-division" fluid class="mx-auto m-0 p-0">
			<Menu id="main-menu"/>
			<b-row id="main-content" class="m-0 p-0">
				<b-col cols="10" class="m-0 p-5">
					<Content/>
				</b-col>
				<b-col cols="2" style="background-color: gray" class="m-0 p-0">
					bbbb
				</b-col>
			</b-row>
		</b-container>
	</b-row>
</template>

<script>
import SideBar from '@/components/main/SideBar'
import Menu from '@/components/main/Menu'
import Content from '@/components/main/Content'

export default {
	components: { SideBar, Menu, Content }
}
</script>

<style lang="scss">

#main-layout {
	overflow: auto;
	background-color: wheat;
	width: 97vw;
	height: auto;
	#sidebar-menu {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 3vw;
		background-color: $fifth;
		height: 100vh!important;
	}
	#main-division {
		flex-grow: 0;
		width: 100%;
		height: 100%;
		#main-menu {
			height: 5vh;
			min-height: max-content;
			background-color: aquamarine;
		}
		#main-content {
			min-height: 95vh;
			height: max-content;
			background-color: rgb(48, 206, 88);
		}
	}
}

</style>