<template>
	<b-col id="right-layout" cols="12">
		<b-row id="logo-container">
			<b-img src="@/assets/Logo.svg" class="w-100 h-100"/>
		</b-row>
		<b-row id="phone-container">
			<b-img src="@/assets/Phone.svg" class="w-100 h-100 mr-3"/>
		</b-row>
	</b-col>
</template>

<script>
export default {

}
</script>

<style lang="scss">

#right-layout {
	height: 100vh;
	min-height: 786px;
	transform: skewX(10deg);
	transform-origin: left top;
}
#logo-container {
	height: 20%;
}
#phone-container {
	height: 75%;
}

</style>