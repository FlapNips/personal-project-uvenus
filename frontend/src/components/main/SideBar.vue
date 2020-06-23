<template>
  <b-container @mouseenter="slideBar = true" class="h-100 m-0 p-0">
    <b-row class="m-0 my-3 p-1">
      <b-img src="../../assets/Perfil.png" class="image-profile"/>
    </b-row>
    <b-row class="m-0 p-0">
        <b-icon-person-lines-fill class="h1 mx-auto my-5"/>
        <b-icon-bookmarks class="h1 mx-auto my-5"/>
        <b-icon-newspaper class="h1 mx-auto my-5"/>
        <b-icon-trophy class="h1 mx-auto my-5"/>
        <b-icon-shop class="h1 mx-auto my-5"/>
        <b-icon-tools class="h1 mx-auto my-5"/>
    </b-row>
    <div @mouseleave="changeSlideBar()">
      <b-sidebar 
        id="sidebar-left" 
        :visible="slideBar" 
        left>
      </b-sidebar>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      slideBar: false
    }
  },
  methods: {
    changeSlideBar() {
      console.log('FOI' + this.slideBar)
      return this.slideBar = !this.slideBar
    }
  }
}
</script>

<style>
.image-profile {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
</style>