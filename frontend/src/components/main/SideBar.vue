<template>
  <b-row @mouseenter="teste()" class="h-100">
    <div @mouseleave="teste()">
      <b-sidebar 
        id="sidebar-left" 
        :visible="slideBar" 
        left>
      </b-sidebar>
    </div>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      slideBar: false
    }
  },
  methods: {
    teste() {
      console.log('FOI' + this.slideBar)
      return this.slideBar = !this.slideBar
    }
  }
}
</script>

<style>

</style>