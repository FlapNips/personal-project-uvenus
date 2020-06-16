<template>
	<b-col id="content-fixe-layout"  cols="6" class="m-0 p-0 py-0">
		<b-img src="../../assets/Fixe.png" class="phone-img"></b-img>
	</b-col>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

#content-fixe-layout {
	top: 0;
	right: 0;
	height: 90vh;
	overflow: hidden;
	background-color: $color_4;
	border-left: 0.5em solid $color_1;
	transform-origin: bottom right;
	transform: skewX(-10deg);
}
#content-fixe-layout .teste {
	height: 500px;
	width: 100%;

}
#content-fixe-layout .phone-img {
	height: 100%;
	object-fit: contain;
	transform: skewX(10deg);
	transform-origin: bottom left;
}
</style>