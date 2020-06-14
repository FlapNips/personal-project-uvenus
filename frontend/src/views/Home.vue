<template>
  <b-container id="home-layout" fluid class="p-0">
    <Menu class="m-0 p-0"/>
      <router-view id="router-layout" class="m-0 p-0"/>
    <Footer class="m-0 p-0"/>
  </b-container>
</template>

<script>
import Menu from '@/components/home/Menu'
import Footer from '@/components/home/Footer'

  export default {
    components: {
      Menu,
      Footer,
    }
  }
</script>
<style lang="scss">

#home-layout {
  height: 100vh;
  max-height: 100vh;
  min-height: max-content;
}

#router-layout {
	height: 80vh;
	background-image: url('../assets/background.png');
	background-repeat: repeat;
	background-size: inherit;
}

</style>
