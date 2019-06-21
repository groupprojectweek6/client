<template>
  <v-flex xs12>
    <v-card color="pink lighten-4">
      <v-layout>
        <v-flex xs5>
          <v-img
            :src="(dataUser.image) ? dataUser.image : 'https://semantic-ui.com/images/wireframe/image.png'"
            height="125px"
            contain
          ></v-img>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ index }}. {{ dataUser.full_name }}</div>
              <div>{{ count }} Likes</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['count', 'dataUser', 'index']
}
</script>