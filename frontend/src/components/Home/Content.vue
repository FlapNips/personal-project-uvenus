<template>
	<b-row id="content-layout" class="m-0">
		<b-col cols="6" class="m-0 p-5 d-flex">
			<b-container fluid style="background-color: rgb(253, 255, 225)">
				<transition enter-active-class="fade">
						aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</transition>
				bbbbbbbbbb
			</b-container>
		</b-col>
		<b-col cols="6" class="m-0 p-5 d-flex">
			<b-container fluid style="background-color: rgb(253, 255, 225)"/>
		</b-col>
	</b-row>
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

#carousel-1 {
	.img {
		height: 500px;	
	}

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>