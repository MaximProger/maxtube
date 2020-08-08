<template>
  <v-col cols="12" md="8" lg="8">
    <video class="video" :src="current.src" controls></video>
    <h1>{{ current.title }}</h1>
    <Estimate />
    <CommentsList />
  </v-col>
</template>

<script>
import Estimate from '@/components/Estimate.vue'
import CommentsList from '@/components/Comments/CommentsList.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Video',
  components: {
    Estimate,
    CommentsList
  },
  methods: {
    ...mapActions(['TO_PLAY_DEFAULT']),
    playDefault() {
      this.TO_PLAY_DEFAULT()
    }
  },
  computed: {
    ...mapState(['videos', 'current', 'index'])
  },
  created() {
    this.playDefault()
  }
}
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  outline: none;
}
</style>
