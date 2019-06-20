<template>
  <v-toolbar app fixed>
    <v-toolbar-title>Menawan</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Home</v-btn>
      <v-btn flat @click="showModal('myprofile')">Username</v-btn>
      <v-btn flat @click="showModal('login')">Login</v-btn>
      <v-btn flat @click="showModal('register')">Register</v-btn>
    </v-toolbar-items>
    <ModalLogin :dialog="modalLoginShow" v-on:close-modal="onModal"></ModalLogin>
    <ModalRegister :dialog="modalRegisterShow" v-on:close-modal="onModal"></ModalRegister>
    <ModalMyProfile :dialog="modalMyProfile" v-on:close-modal="onModal"></ModalMyProfile>
  </v-toolbar>
</template>

<script>
import ModalLogin from './modal-login.vue'
import ModalRegister from './modal-register.vue'
import ModalMyProfile from './modal-myprofile.vue'

export default {
  components: {
    ModalLogin,
    ModalRegister,
    ModalMyProfile
  },
  data() {
    return {
      modalLoginShow: false,
      modalRegisterShow: false,
      modalMyProfile: false,
    }
  },
  methods: {
    showModal(val) {
      if(val == 'login') {
        this.modalLoginShow = true
      } else if (val == 'register') {
        this.modalRegisterShow = true
      } else if (val == 'myprofile') {
        this.modalMyProfile = true
      }
    },
    onModal: function (type) {
      if (type == 'login') {
        this.modalLoginShow = false
      } else if (type == 'register') {
        this.modalRegisterShow = false
      } else if (type == 'myprofile') {
        this.modalMyProfile = false
      }
    }
  }
};
</script>

<style scoped>
</style>