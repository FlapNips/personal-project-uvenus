<template>
    <div id="header-menu" class=" justify-content-center row h-25 m-0 p-0">
        <div class="col-6 m-0 p-0 m-1" >
            <b-img
                src="@/assets/profile.png"
                class="img-fluid rounded-circle z-depth-1 mx-auto"
                @mouseenter="collapsed(false)"
                @mouseleave="collapsed(true)"
            />
        </div>
        <b-col class="col-12">@Usuário_1212</b-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
            teste: false,
        }
        
    },
    methods: {
        collapsed(newValue) {
            console.log('Aqui foi o novo valor' + newValue)
            return this.$store.commit('showMoreInformation', newValue);
        }
    }
}
</script>

<style>
#header-menu {
    position: relative;
    height: 20%;
}
#rank-img {
    position: absolute;
    top: 0;
    left: 0;
}
</style>