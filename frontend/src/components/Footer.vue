<template>
	<b-row id="layout-footer" class="mb-0">
<<<<<<< HEAD:frontend/src/components/Footer.vue
		aaaaaa
=======
		<b-col cols="4" class="division p-0 m-0 text-center">
			<div class="circle-button mx-auto p-0"></div>
			<div class="my-auto">testeaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
		</b-col>
		<b-col cols="4" class="division p-0 m-0">
			<div class="circle-button mx-auto p-0"></div>
		</b-col>
		<b-col cols="4" class="division p-0 m-0">
			<div class="circle-button mx-auto p-0"></div>
		</b-col>
>>>>>>> parent of b7c8126... Revert "Ainda escolhendo layout":frontend/src/components/home/Footer.vue
	</b-row>
</template>

<script>
export default {

}
</script>

<style lang="scss">

#layout-footer {
	position: relative;
	z-index: 10;
<<<<<<< HEAD:frontend/src/components/Footer.vue
	height: 5em;
	background-color: black;
	border-top: 2px solid yellow;

=======
	height: 10vh;
	background-color: $color_1;
	border-top: 5px solid $color_3;
}
.division {
	position: relative;
	.circle-button {
		position: absolute;
		top: -50%;
		border: 5px solid $color_1;
		height: 5em;
		width: 5em;
		left: 0;
		right: 0;
		background-color: $color_3;
		border-radius: 50%;
		bottom: 50%;
		&:hover {
			border: 5px solid $color_2;
			cursor: pointer
		}
	}
>>>>>>> parent of b7c8126... Revert "Ainda escolhendo layout":frontend/src/components/home/Footer.vue
}
</style>