<template>
  <v-app>
    <v-content>
      <Navbar></Navbar>
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
      message: 'Hello world',
      currentPage: 'content-home'
    };
  },
  methods: {
    changePage(val) {
      this.currentPage = val
    }
  }
};
</script>

<style scoped>
</style>