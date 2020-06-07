<template>
  <div id="layout-register-page" class="row m-0 p-0">
    <LayoutRegister/>
    <div id="background-lg" class="d-none d-lg-block"></div>
    <div id="background-xs" class="d-lg-none"></div>
  </div>
</template>

<script>
import LayoutRegister from './SignJoin/LayoutRegister.vue'
export default {
    components: {
        LayoutRegister,

    }
}
</script>

<style scoped>
#layout-register-page {
  width: 100vw;
  height: 100vh;
}

#background-lg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -5;
  background: radial-gradient(circle, var(--second-color) 60%, var(--third-color) 150%);
  background-size: 100% 100%;
  background-position: center;
}
#background-xs {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -5;
  background-color: var(--second-color);
  background-size: 100% 100%;
  background-position: center;
}
</style>