<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Profile and Share</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout>
              <v-flex>
                <v-layout align-center justify-center row>
                  <v-avatar
                    :size="256"
                    color="grey lighten-4"
                  >
                    <img :src="(userLoginData.image) ? userLoginData.image : 'https://vuetifyjs.com/apple-touch-icon-180x180.png'" 
                      alt='avatar'>
                  </v-avatar>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-flex>
              <v-flex xs12 offset-xs3>
                <h3>Hi {{ userLoginData.full_name }} </h3>
              </v-flex>
              <v-flex xs12 offset-xs3>
                <h3>With {{ userLoginData.totalLike }} Likes</h3>
              </v-flex>
              <v-flex xs12 offset-xs3>
                <h3>Based on Google, your emotions are : </h3>
                {{ userLoginData.emotion }}
                <h3>Based on Google, your Gender : </h3>
                {{ userLoginData.gender }}
              </v-flex>
            </v-flex>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title><h3>Share on your social media!</h3></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn flat icon color="pink" :href="linkTweet" target='_blank'>
                    Twitter
                    <v-icon>fab fa-twitter</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closedModal()">Close</v-btn>
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
        userLoginData: {},
      }
    },
    computed: {
      linkTweet() {
        let textTweet = `I'm ${this.userLoginData.gender} & I'm ${this.userLoginData.emotion}. Checkout this page! menawan.robbycp.com`
        console.log('hasil texttweet', textTweet)
        let encodedURI = encodeURIComponent(textTweet)
        console.log('hasil texttweet', encodedURI)
        let value = 'https://twitter.com/intent/tweet?hashtags=menawan&text=' + encodedURI
        return value
      }
    },
    methods: {
      getUserLoginProfile() {
        axios({
          method: 'GET',
          headers: {
            token: JSON.parse(localStorage.token).token
          },
          url: 'http://localhost:3000/myprofile'
        })
          .then(({ data }) => {
            console.log('ini user login', data)
            this.userLoginData = {
              totalLike: data.count,
              id: data._id,
              full_name: data.dataUser[0].full_name,
              email: data.dataUser[0].email,
              gender: data.dataUser[0].gender,
              emotion: data.dataUser[0].emotion,
              image: data.dataUser[0].image
            }
            console.log('hasilnya', this.userLoginData)
          })
          .catch((err) => {
            console.log(err)
          })
      },
      closedModal() {
        this.$emit('close-modal', 'myprofile')
      },
      sendLogin() {
        this.$emit('close-modal', 'myprofile')
      },
    },
    created() {
      if (localStorage.token) {
        this.getUserLoginProfile()
      }
    },
  }
</script>