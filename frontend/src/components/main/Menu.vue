<template>
	<b-row id="main-menu" class="m-0 p-0">
		<b-col cols="3" class="ml-auto text-right">
			<b-icon icon="chevron-double-down" class="my-auto h-100 h1"/>
		</b-col>
	</b-row>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#main-menu {
	position: fixed;
	height: 3em;
	z-index: 50;
	width: 97vw;
	max-width: 100%;
	min-height: max-content;
	background-color: aquamarine;
}
</style>