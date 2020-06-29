<template>
	<div class="main-container m-0 p-0">
		<aside class="view-main-sidebar m-0 p-0">
			<SideBar/>
		</aside>
		<header class="view-main-menu-top m-0 p-0">
			<MenuTop/>
		</header>
		<main class="view-main-content m-0 p-0">
			<Content/>
		</main>
		<section class="view-main-menu-right m-0 p-0">
			<MenuRight/>
		</section>
	</div>
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
.main-container {
	display: grid;
	position: relative;
	grid-template-columns: 5em auto 300px;
	grid-template-rows: 5em minmax(calc(100vh - 5em), 100%);
	.view-main-sidebar {
		position: relative;
		z-index: 100;
		background-color: $primary_medium;
		grid-column: 1/2;
		grid-row: 1/3;
	}
	.view-main-menu-top {
		background-color: green;
		grid-column: 2/4;
		grid-row: 1/2;
	}
	.view-main-content {
		background-color: rgb(153, 153, 255);
		grid-column: 2/3;
		grid-row: 2/3;
	}
	.view-main-menu-right {
		background-color: gray;
		grid-column: 3/4;
		grid-row: 2/3;
	}
}

</style>