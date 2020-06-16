<template>
	<b-row id="right-layout">
		<b-col id="top" cols="12">
				<b-img src="@/assets/Logo.svg" class="ml-5 my-auto h-100"/>
		</b-col>
			<b-img id="image" src="@/assets/Phone.svg"/>
	</b-row>
</template>

<script>
export default {

}
</script>

<style lang="scss">

#right-layout {
	height: 100vh;
	transform: skewX(10deg);
	transform-origin: left top;
}
#top {
	height: 15%;
}
#image {
	max-width: 70%;
	max-height: 70%;
	margin-left: 15%;
}
</style>