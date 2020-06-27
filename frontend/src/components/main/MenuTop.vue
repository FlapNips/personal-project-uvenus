<template>
	<b-col cols="12" class="main-menu-top m-0 p-0">
		<b-container class="my-auto m-0 fixed-child p-0">
			<b-button v-for="button in buttons" :key="button.name" class="button-menu-top mx-3">
				<b-icon :icon="button.icon" class="icon-size"/>
			</b-button>
		</b-container>
	</b-col>
</template>

<script>
export default {
	data() {
		return {
			buttons: [
				{ icon: 'arrow', name: ''}
			
			]
		
		}
	}
}
</script>

<style lang="scss">

#view-main-menu-top {

	.main-menu-top {
	width: 100%;
	height: $menuTopHeight;
	min-height: max-content;
	z-index: 50;
	}
	.fixed-child {
		position: fixed;
		width: 100%;
		height: inherit;
		background-color: aquamarine;
	}
	.icon-size {
		height: 2em;
		width: 2em;
	}
	.button-menu-top {
		border-radius: 50%;
	}

}
</style>