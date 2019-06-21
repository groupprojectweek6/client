<template>
  <v-flex xs12 md6>
    <v-container>
      <h1>New User</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
        <CardLike></CardLike>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
import CardLike from './card-like.vue'

export default {
  components: {
    CardLike
  }  
}
</script>

<style>

</style>