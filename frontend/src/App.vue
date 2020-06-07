<template>
  <div id="app">
    <router-view>
      <Footer/>
    </router-view>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
components: {
  Footer
},
  name: 'App',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


#app {
  color: #2c3e50;
  margin: 0;
  position: relative;
}
</style>
