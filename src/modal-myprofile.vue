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
                  <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                </v-layout>
              </v-flex>
            </v-layout>
            </v-avatar>
            <v-flex>
              <v-flex xs12 offset-xs3>
                <h3>Your rank is {{ rank }}</h3>
              </v-flex>
              <v-flex xs12 offset-xs3>
                <h3>With {{ totalLike }} Likes</h3>
              </v-flex>
              <v-flex xs12 offset-xs3>
                <h3>Data Google Vision</h3>
              </v-flex>
            </v-flex>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title><h3>Share on your social media!</h3></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action @click="">
                  <v-btn flat icon color="pink">
                    <v-icon>star</v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile-action>
                  <v-btn flat icon color="pink">
                    <v-icon>star</i></v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile-action>
                  <v-btn flat icon color="pink">
                    <v-icon>star</v-icon>
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
  export default {
    props: ['dialog'],
    data() {
      return {
        rank: 10,
        totalLike: 100
      }
    },
    methods: {
      closedModal() {
        this.$emit('close-modal', 'myprofile')
      },
      sendLogin() {
        this.$emit('close-modal', 'myprofile')
      },
      linkTwitter() {

      },
      linkFacebook() {

      }
    },
  }
</script>