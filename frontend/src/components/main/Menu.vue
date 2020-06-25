<template>
	<div id="main-menu" class="m-0 p-0">
		<b-col cols="3" class="ml-auto text-right">
			<b-icon icon="chevron-double-down"/>
		</b-col>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#main-menu {
	position: fixed;
	height: 5vh;
	z-index: 50;
	width: 100%;
	min-height: max-content;
	background-color: aquamarine;
}
</style>