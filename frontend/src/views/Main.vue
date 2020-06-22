<template>
	<b-row id="main-layout" fluid class="m-0 p-0 mx-auto">
		<div id="sidebar-menu" class="m-0 p-0">
			<sideBar/>
		</div>
		<b-col id="main-division" class="m-0 p-0">
			<b-container fluid>
				<b-row id="main-menu">
					aa
				</b-row>
				<b-row id="main-content">
					<b-col cols="10">
						aaaa
					</b-col>
					<b-col cols="2" style="background-color: gray">
						bbbb
					</b-col>
				</b-row>
			</b-container>
		</b-col>
	</b-row>
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
	width: 100vw;
	#sidebar-menu {
		background-color: blue;
		width: 3%!important;
		height: 100vh!important;
	}
	#main-division {
		position: relative;
		height: 100%;
		#main-menu {
			height: 5vh;
			max-height: 150px;
			background-color: aquamarine;
		}
		#main-content {
			min-height: 95vh;
			height: 100%;
			background-color: rgb(48, 206, 88);
		}
	}
}

</style>