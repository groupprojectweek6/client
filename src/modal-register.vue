<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Register</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="full_name" label="Full Name" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="email" label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-btn color="success" @click="$refs.inputUpload.click()">Upload File</v-btn>
                <input v-show="false" ref="inputUpload" type="file" @change="onFileSelected" >
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closedModal()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="sendRegister()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    props: ['dialog'],
    data() {
      return {
        full_name: '',
        email: '',
        password: '',
        selectedFile: null,
      }
    },
    methods: {
      onFileSelected: function(event) {
        this.selectedFile = event.target.files[0]
      },
      closedModal() {
        this.$emit('close-modal', 'register')
      },
      sendRegister() {
        axios({
          method: 'POST',
          headers: { token: JSON.parse(localStorage.token).token},
          url: 'http://localhost:3000/register'
        })
          .then(({ data }) => {
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          })
        this.$emit('close-modal', 'register')
      }
    },
  }
</script>