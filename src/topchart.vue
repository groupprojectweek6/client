<template>
  <v-flex xs12 md6>
    <v-container>
      <h1>Top Chart</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <CardTop></CardTop>
        <CardTop></CardTop>
        <CardTop></CardTop>
        <CardTop></CardTop>
        <CardTop></CardTop>
        <CardTop></CardTop>
        <CardTop></CardTop>
        <CardTop></CardTop>
        <CardTop></CardTop>
        <CardTop></CardTop>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
import CardTop from './card-topchart.vue'

export default {
  components: {
    CardTop
  }
}
</script>

<style>

</style>