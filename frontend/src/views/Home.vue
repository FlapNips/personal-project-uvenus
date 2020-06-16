<template>
<<<<<<< HEAD
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
=======
  <b-row id="home-layout" class="m-0 p-0">
    <b-col cols="6">
        <b-img src="@/assets/phone.png" class="mx-auto my-auto"/>
    </b-col>
  </b-row>
</template>

<script>

  export default {

>>>>>>> parent of b7c8126... Revert "Ainda escolhendo layout"
  }
</script>
<style lang="scss">


#home-layout {
  height: 100vh;
<<<<<<< HEAD
  background-image: url('../assets/background.png');
=======
  overflow: hidden;
  background: rgb(126,0,177);
  background: linear-gradient(90deg, rgba(126,0,177,1) 0%, rgba(0,163,255,1) 100%);
>>>>>>> parent of b7c8126... Revert "Ainda escolhendo layout"
}
</style>
