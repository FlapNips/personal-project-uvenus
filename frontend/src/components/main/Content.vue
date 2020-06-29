<template>
	<b-container id="main-content" fluid class="m-0 p-0">
		<router-view/>
	</b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#main-content {
	width: 100%;
	height: 100%;
	margin: $menuTopHeight 0 0 0;
	min-height: max-content;
	background-color: green($color: #000000);
}
</style>