<template>
  <b-row id="home-layout" class="m-0 p-0">
    <b-col id="left-division" cols="4">
      <LeftDivision/>
    </b-col>
    <b-col id="right-division" class="h-100">
      <RightDivision/>
    </b-col>
  </b-row>
</template>
<script>
import LeftDivision from '@/components/home/LeftDivision'
import RightDivision from '@/components/home/RightDivision'

  export default {
    name: 'Home',
    components: {
      LeftDivision,
      RightDivision
    }
}
</script>
<style lang="scss">

#home-layout {
  height: 100vh;
  background-color: rgb(255, 255, 255);
  #left-division {
    background-color: #6d84b6;
    transform: skewX(-10deg);
    transform-origin: top left;
      min-width: max-content!important;
  }
}
</style>
