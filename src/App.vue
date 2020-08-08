<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <v-container>
        <v-row>
          <Video />
          <VideoList />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Video from '@/components/Video/Video.vue'
import VideoList from '@/components/Video/VideoList.vue'

export default {
  name: 'App',

  components: {
    Header,
    Video,
    VideoList
  },

  data: () => ({}),
  methods: {},
  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style lang="scss"></style>
