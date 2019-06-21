<template>
  <v-flex xs12 md6>
    <v-container>
      <h1>New User</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <CardLike v-for="(user, index) in newUsers"
          :oneUser='user' :index="index" :isLoginParent="isLogin"
          ></CardLike>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
import CardLike from './card-like.vue'
import axios from 'axios'

export default {
  props: ['isLogin'],
  data() {
    return {
      newUsers: [],
    }
  },
  components: {
    CardLike
  },
  methods: {
    getNewUsers() {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/voting/newusers',
      })
        .then(({ data }) => {
          console.log('ini data newUsers', data)
          if (localStorage.token) {
            let loginUserId = JSON.parse(localStorage.token).userId
            data = data.filter((one) => one._id !== loginUserId)
          }
          this.newUsers = data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created() {
    this.getNewUsers()
  }
}
</script>

<style>

</style>