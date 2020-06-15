<template>
	<b-col class="content-home-layout d-flex flex-column m-0 p-5">
		<b-container fluid class="box-content m-0 p-2">
			<b-col cols="9" class="main-content mx-auto">
				aaaa
			</b-col>
		</b-container>
	</b-col>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    }
}
</script>

<style lang="scss" scoped>

.content-home-layout {
	flex-grow: 1;
	.box-content {
		background-color: rgb(119, 119, 255);
		height: 100%;
		transform: skewX(-10deg);
		transform-origin: bottom left;
	}
	.main-content {
		height: 100%;
		transform: skewX(10deg);
		background-color: rgb(134, 134, 134);
	}
}
</style>