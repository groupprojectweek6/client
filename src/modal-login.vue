<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="email" label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closedModal()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="sendLogin()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['dialog'],
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      closedModal() {
        this.$emit('close-modal', 'login')
      },
      sendLogin() {
        axios({
          method: 'POST',
          data: { email: this.email, password: this.password },
          url: 'http://localhost:3000/login'
        })
          .then(({ data }) => {
            console.log('berhasil login', data)
            localStorage.setItem('token', JSON.stringify(data))
            this.$emit('close-modal', 'login')
            this.$emit('set-islogin', true)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
  }
</script>