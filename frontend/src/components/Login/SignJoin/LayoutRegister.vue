<template>
<div id="layout-register" class="
		col-12
		col-sm-12
		col-md-12
		col-lg-4
		col-xl-4
		my-auto
		mx-auto
		">

		<Register id="register" class="p-4"/>
		<Effect class="
		col-12
		text-center
		mx-auto
		align-middle
		"/>

</div>
</template>

<script>
import Effect from './EffectRegister.vue'
import Register from './Register.vue'

export default {
	components: {
		Effect,
		Register,
	},
}
</script>
<style scoped>
#layout-register {
	color: white;
	overflow-y      : auto;
	background-color: var(--second-color);
}
#register {
	border: 2px solid var(--first-color);
	border-radius: 3em;
}
</style>