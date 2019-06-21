<template>
  <v-flex xs6 sm4>
    <v-card>
      <v-img
        height="100px"
        :src="(oneUser.image) ? oneUser.image : 'https://semantic-ui.com/images/wireframe/image.png'"
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
import Swal from "sweetalert2";
import axios from "axios";
export default {
  props: ["oneUser", "index", "isLoginParent"],
  methods: {
    checkVoting() {},
    sendLike(id) {
      axios({
        method: "POST",
        headers: {
          token: JSON.parse(localStorage.token).token
        },
        url: `http://localhost:3000/voting/${id}`
        })
        .then(({ data }) => {
          console.log("berhasil like");
          console.log(data);
        })
        .catch(err => {
          Swal.fire({
            title: "You Have Liked This Person!",
            text:"Can't Do it Twice",
            type: "error",
            confirmButtonText: "Okay"
          });
          console.log(err);
        });
    },
    sendDislike(id) {
      axios({
        method: "DELETE",
        headers: {
          token: JSON.parse(localStorage.token).token
        },
        url: `http://localhost:3000/voting/${id}`
      })
        .then(({ data }) => {
          console.log("berhasil dislike");
        })
        .catch(err => {
          Swal.fire({
            title: "You Still Not Liked This Person!",
            text:"You Can't Do it",
            type: "error",
            confirmButtonText: "Okay"
          });
          console.log(err);
        });
    }
  }
};
</script>