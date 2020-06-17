<template>
  <b-row id="home-layout" class="m-0 p-0">
    <b-col id="left-division" cols="5" class="m-0 p-0">
      <LeftDivision/>
    </b-col>
    <b-col cols="7" class="m-0 p-0">
      <Menu/>
      <router-view/>
    </b-col>
  </b-row>
</template>

<script>

import LeftDivision from '@/components/home/LeftDivision'
import Menu from '@/components/home/Menu'

  export default {
    name: 'Home',
    components: {
      LeftDivision,
      Menu
    }
}
</script>
<style lang="scss">

#home-layout {
  height: 100vh;
  background-color: rgb(255, 255, 255);
  #left-division {
    background-color: $fifth;
    transform: skewX(-10deg);
    transform-origin: top left;
      min-width: max-content!important;
  }
}
</style>
