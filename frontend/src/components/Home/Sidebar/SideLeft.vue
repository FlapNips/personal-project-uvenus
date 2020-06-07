<template>
  <b-container col id="main-layout" fluid class="m-0 p-0 h-100"
    @mouseenter="collapsed = false">
      <b-sidebar :visible="!collapsed" no-header-close no-header
        no-close-on-esc width="15%">
        <div @mouseleave="collapsed = true" class="h-100">
          <!-------- HEADER -------->
              <Header/>
          <!-------- MENU -------->
              <Menu/>
          <!-------- FOOTER -------->
        <div id="more-information" class="m-0 p-0">
            <div id="more-information-slide" :class=" showMoreInformation ? '' : 'in'">
                <b-container fluid class="w-100 h-100 m-0 p-0 my-auto">
                  <div class="row m-0 mt-1 p-0">
                      Descrição.Isso é uma descrição de cinquenta letras.
                  </div>
                </b-container>
            </div>
        </div>
        </div>
      </b-sidebar>
  </b-container>
</template>
<script>
import Menu from './Menu.vue'
import Header from './Header.vue'
import { mapGetters } from 'vuex'

  export default {
    name: "SideBarMenu",
    components: {
      Menu,
      Header
    },
    data() {
      return {
        show: true,
        collapsed: true,
        navigation: [
          {
            name: "Pessoal",
            icon: "alarm-fill",
            children: [
              {
                name: "Submenu 1",
                to: "/navigation/pro/double-navigation-v1"
              },
              {
                name: "Submenu 2",
                to: "/navigation/pro/double-navigation-v2"
              },
              {
                name: "Submenu 3",
                to: "/navigation/pro/double-navigation-v3"
              },
              {
                name: "Submenu 4",
                to: "/navigation/pro/double-navigation-v4"
              },
              {
                name: "Submenu 5",
                to: "/navigation/pro/double-navigation-v5"
              },
              {
                name: "Submenu 6",
                to: "/navigation/pro/double-navigation-v6"
              }
            ]
          },
          {
            name: "Curso",
            icon: "book",
            children: [
              {
                name: "Quick start",
                href:
                  "https://mdbootstrap.com/docs/vue/getting-started/quick-start/"
              },
              {
                name: "Technical Support",
                href: "https://mdbootstrap.com/support/"
              }
            ]
          },
          {
            name: 'Universidade',
            icon: 'graduation-cap',
            children: [
            {
              name: 'Novidades',
            }
            ]
          },
          {
            name: "Parceiros",
            icon: "",
            children: [
              {
                name: "Parceiros"
              }
            ]
          },
          {
            name: "Configurações",
            icon: "wrench",
            children: [
              {
              name: 'Privacidade'
              }
            ]
          },
          
        ]
      };
    },
      computed: {
        ...mapGetters({

        }),
        showMoreInformation() {
          return this.$store.getters.getMoreInformation
        }
      }
  };
</script>

<style scoped>
#main-layout {
  position: relative;
}
#side {
  width: 5%;
}
#fix-menu {
  background-color: gray;
  min-width: max-content;
  z-index: 0;
}
#collapseOne {

}
#more-information {
    position: absolute;
    left: 100%;
    top: 0;
    height: 25%;

}
#more-information-slide {
    position: relative;
    left: 0;
    height: 100%;

    -webkit-transition: width 400ms ease;
    -moz-transition: width 400ms ease;
    -o-transition: width 400ms ease;
    transition: width 400ms ease;
    
    display: block;
    overflow: hidden;
    background-color: var(--fourth-color);

    width: 0px;
}
#more-information-slide.in {
    width: 200px;
}
.icon-fix-menu {
  min-width: max-content!important;
  min-height: max-content!important;
}
</style>