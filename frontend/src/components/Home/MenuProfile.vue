<template>
  <div class="container-fluid">
    <div id="profile" class="row m-1 p-0">
        <b-img id="rank-img" :style="'opacity:'+ teste" src="@/assets/rank.png" class="col-3"/>
        <b-img id="profile-img" @mouseenter="teste = 1" @mouseout="teste = 0" src="@/assets/profile.png" class="col-8 m-0 p-0 mx-auto border-black rounded-circle"/>
        <span id="profile-username" @mouseenter="teste = 1" @mouseout="teste = 0" class="col-12 text-center mx-auto p-0">@{{username}}</span>
        <div id="banner-images" @mouseenter="teste = 1" @mouseout="teste = 0" class="col-12 mx-auto p-0">
            <b-img  src="@/assets/banner.png" class="rank-img rank-first col-11 mx-auto p-0 "/>
            <b-img  src="@/assets/banner-right.png" class="rank-img rank-second col-11 mx-auto p-0 "/>
            <b-img  src="@/assets/banner-left.png" class="rank-img rank-second col-11 mx-auto p-0 "/>
        </div>
    </div>
    <!-- DESCRIPTION -->
    <div class="row">
        <div class="col-9 text-wrap text-center border m-2 mx-auto">
            Uma pessoa comum com uma descrição comum.
        </div>
    </div>
    <!-- RANK & PROFILE BUTTON -->
    <div class="row mt-1">  
        <div class="col-10 border mx-auto">
            <div class="row">
            <span class="col-6 text-center border" src>5643</span>
            <div @click="profileOptions()" class="btn-profile col-6 m-0 p-0 mx-auto btn">Perfil</div>
            </div>
        </div>
    </div>
    <!-- PERSONAL -->
    <div class="col-12 separator mt-3">
        <div class="col-4 m-0 p-0 my-auto mx-auto">Pessoal</div>
    </div>
        <div class="row m-1 p-0 mx-auto">
            <div class="btn-profile p-0 col-10 m-1 mx-auto btn">Amigos</div>
            <div class="btn-profile p-0 col-10 m-1 mx-auto btn">Cronograma</div>
            <div class="btn-profile p-0 col-10 m-1 mx-auto btn">Matérias</div>
            <div class="btn-profile p-0 col-10 m-1 mx-auto btn">Salvos</div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            rankMouse: false,
            username: 'Usuario_12341234',
            profileOptionsShow: true,
            effectProfile: '',
            abc: false,
            teste: 0,
        }
    },
    methods: {
        profileOptions(){
            this.profileOptionsShow = !this.profileOptionsShow
            if (this.profileOptionsShow) {
                this.effectProfile = 'fadeInDown'
            } else {
                this.effectProfile = 'fadeOutDown'
            }
        },
    }
}
</script>

<style scoped>
/* PROFILE */
#profile {
    position: relative;
}
#rank-img {
    position: absolute;
    right: 0;
    z-index: 2;
    top: 0;
    opacity: 0;
    margin-right: 10%;
}
#banner-images {
    position: absolute;
    bottom: 30%;
}
#profile-username {
    position: absolute;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    z-index: 4;
    font-size: 1vw;
    max-width: 100%;
    bottom: 2.5%;
}
.rank-img {
    position: absolute;
    left: 0;
    right: 0;
}
.rank-first {
    z-index: 2;
}
.rank-second {
    z-index: -1;
}

/* SEPARATOR PROFILE AND MENU */
.separator {
    display    : flex;
    align-items: center;
    text-align : center;
}
.separator::before, .separator::after {
    content      : '';
    flex         : 1;
    border-bottom: 1px solid black;
}
.separator::before {
    margin-right: .25em;
}
.separator::after {
    margin-left: .25em;
}

/* BUTTON PROFILE */
.btn-profile {
    background-color: var(--fifth-color);
    text-transform: none;
    font-family: Georgia, 'Times New Roman', Times, serif;  
}
.btn-profile:hover {
    background-color: var(--fourth-color);
}
</style>