<template>
	<b-row id="main-menu-top" no-gutters class="px-3">
		<b-col cols="2" align-self="center">
			<b-input-group>
				<b-input-group-prepend is-text>
					<b-icon icon="search"/>
				</b-input-group-prepend>
				<b-form-input/>
			</b-input-group>
		</b-col>
		<b-col cols="2" class="h-100 p-2 ml-auto">
			<b-button class="button-menu-top h-100 mx-2">
				<b-img src="@/assets/profile.png" class="image-or-icon mr-2"/>
				<span style="color: black;">FLAPNIPS</span>
			</b-button>
			<b-button class="button-menu-top h-100 mx-2" pill>
				<b-img src="@/assets/icon-add.svg" class="image-or-icon"/>
			</b-button>
		</b-col>
	</b-row>
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
#main-menu-top {
	position: relative;
	width: 100%;
	z-index: 10;
	height: $menuTopHeight;
	min-height: max-content;
	.image-or-icon  {
		height: 100%;
		max-width: inherit;
		max-height: inherit;
	}
	.button-menu-top {
		background-color: transparent;
		border: 0;
		&:hover {
			background-color: $secondary;
		}
	}
}
</style>