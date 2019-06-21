<template>
  <v-flex xs6 sm4>
    <v-card>
      <v-img
        height="100px"
        :src="(oneUser.image) ? oneUser.image : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
      >
      </v-img>
      <v-card-title>{{ oneUser.full_name }}</v-card-title>
      <v-card-actions v-if="isLoginParent">
        <v-layout align-center justify-center>
          <v-btn flat icon color="blue" @click="sendLike(oneUser._id)">
            <v-icon dark>thumb_up</v-icon>
          </v-btn>
          <v-btn flat icon color="red" @click="sendDislike(oneUser._id)">
            <v-icon dark>thumb_down</v-icon>
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['oneUser', 'index', 'isLoginParent'],
    methods: {
      checkVoting() {

      },
      sendLike(id) {
        axios({
          method: 'POST',
          headers: {
            token: JSON.parse(localStorage.token).token
          },
          url: `http://localhost:3000/voting/${id}`
        })
          .then(({ data }) => {
            console.log('berhasil like')
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          })
      },
      sendDislike(id) {
        axios({
          method: 'DELETE',
          headers: {
            token: JSON.parse(localStorage.token).token
          },
          url: `http://localhost:3000/voting/${id}`
        })
          .then(({ data }) => {
            console.log('berhasil dislike')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>