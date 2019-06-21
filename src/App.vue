<template>
  <v-app>
    <v-content>
      <Navbar :isLoginParent='isLogin' v-on:set-logout="setLoginState" 
        v-on:setIsLoginParent="setLoginState"></Navbar>
      <v-layout row v-if="currentPage == 'content-home'">
        <NewUser></NewUser>
        <Topchart></Topchart>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './navbar.vue'
import Topchart from './topchart.vue'
import NewUser from './new-user.vue'

export default {
  components: {
    Navbar,
    Topchart,
    NewUser
  },
  data() {
    return {
      isLogin: false,
      message: 'Hello world',
      currentPage: 'content-home'
    };
  },
  methods: {
    setLoginState(val) {
      this.isLogin = val
    },
    changePage(val) {
      this.currentPage = val
    }
  },
  created() {
    if (localStorage.token) {
      this.isLogin = true
    }
  }
};
</script>

<style scoped>
</style>