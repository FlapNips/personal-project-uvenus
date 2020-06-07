<template>
<div>
  <Username/>
  <Email/>
  <Password/>
  <div class="row text-center align-middle h-100">
    <div class="col-5 mx-auto my-auto">
    <router-link to="/">Já possuo conta !</router-link>
    </div>
    <button class="col-5 mx-auto btn btn-success">
      Cadastrar
    </button>
  </div>
</div>
</template>

<script>
import Username from './InputRegisterUsername.vue'
import Email from './InputRegisterEmail.vue'
import Password from './InputRegisterPassword.vue'
export default {
  components: {
    Username,
    Email,
    Password
  }
}
</script>
<style scoped>
</style>