<template>
  <b-container id="home-layout" fluid class="p-0 d-flex flex-column">
    <Menu class="m-0 p-0"/>
    <Content class="m-0 p-0"/>
    <Footer class="m-0 p-0"/>
  </b-container>
</template>

<script>
import Menu from '@/components/home/Menu'
import Footer from '@/components/Footer'
import Content from '@/components/home/Content'

  export default {
    components: {
      Menu,
      Footer,
      Content
    }
  }
</script>
<style lang="scss">


#home-layout {
  height: 100vh;
  background-image: url('../assets/background.png');
}
</style>
