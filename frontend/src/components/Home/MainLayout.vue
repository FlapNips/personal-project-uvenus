<template>
    <b-container id="layout-main" fluid class="text-center m-0 p-0">
        <b-row id="content-main" class="m-0 p-0">
            <div id="menu-sidebar" class="m-0 p-0 h-100" style="background-color: gray;">
                    <!-- MENU MAIN-->
                    <SideLeft/>
            </div>
            <div id="content-right" class="m-0 p-0">
                <b-row class="menu-and-footer m-0 p-0" style="background-color: blue;">
                        <!-- MENU TOP -->
                    <MenuTop class="m-0 p-0"/>
                </b-row>
                <b-row id="content-main" class=" m-0 p-0">
                        <b-col class="col-8 m-0 p-0">
                            <!-- CONTENT MAIN-->
                            <Content/>
                        </b-col>
                        <b-col class="col-4 m-0 p-0" style="background-color: green;">
                            <!-- FLOAT RIGHT CONTENT-->
                            <FloatRight/>
                        </b-col>
                </b-row>
                <b-row class="menu-and-footer m-0 p-0">
                <slot/>
                </b-row>
            </div>
        </b-row>
    </b-container>
</template>

<script>
import SideLeft from './Sidebar/SideLeft.vue'
import MenuTop from './MenuTop.vue'
import Content from './Content.vue'
import FloatRight from './FloatRight.vue'


export default {
    components: {
        SideLeft,
        MenuTop,
        Content,
        FloatRight,
    },
    data(){
        return {
            showMenu: true,
            show: true,
        }
    },
    computed: {
        statsMenu(){
            if(this.showMenu) {
                return 'danger'
            } else {
                return 'success'
                }
        }
    }
}
</script>
<style scoped>
#layout-main {
    width: 100vw;
    height: 100vh;
}
#content-main {
    height: 100%;
}
#menu-sidebar {
    width: 3%!important;
}
#content-right {
    width: 97%;
    height: 94%;
}
.menu-and-footer {
    height: 3%;
    width: 100%;
}
</style>