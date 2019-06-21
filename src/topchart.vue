<template>
  <v-flex xs12 md6>
    <v-container>
      <h1>Top Chart</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <CardTop v-for="(user, index) in topChartUsers"
          :count="user.count" :dataUser="user.dataUser[0]" :index="index + 1"
        ></CardTop>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
import CardTop from './card-topchart.vue'
import axios from 'axios'

export default {
  data() {
    return {
      topChartUsers: []
    }
  },
  components: {
    CardTop
  },
  methods: {
    getTopChartUsers() {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/voting/top20'
      })
        .then(({ data }) => {
          console.log('ini data top chart', data)
          this.topChartUsers = data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created() {
    this.getTopChartUsers()
  }
}
</script>

<style>

</style>