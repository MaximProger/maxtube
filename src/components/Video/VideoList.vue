<template>
  <v-col class="player__preview__list" cols="12" md="4" lg="4">
    <h2 class="mb-2">Video list:</h2>
    <div
      v-for="video in videos"
      :key="video.title"
      class="player__preview"
      @click="play(video)"
    >
      <video class="player__preview__video" :src="video.src"></video>
      <h3>{{ video.title }}</h3>
    </div>
  </v-col>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'VideoList',
  methods: {
    ...mapActions(['TO_PLAY']),
    play(video) {
      this.TO_PLAY(video), window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  computed: {
    ...mapState(['videos', 'current', 'index'])
  }
}
</script>

<style lang="scss" scoped>
.player__preview {
  margin-bottom: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #1867c0;
  }
}

.player__preview__video {
  width: 100%;
  outline: none;
}

.player__preview__list {
  overflow-y: scroll;
  height: 90vh;

  &::-webkit-scrollbar {
    width: 10px; /* 1 - вертикальный скроллбар */
  }
  &::-webkit-scrollbar {
    &:horizontal {
      height: 4px; /* 1 - горизонтальный скроллбар */
    }
  }
  &::-webkit-scrollbar-button {
    background: #121212; /* 2 - кнопка */
  }
  &::-webkit-scrollbar-track {
    background: #a7acc3; /* 3 - трек */
  }
  &::-webkit-scrollbar-track-piece {
    background: #a7acc3; /* 4 – видимая часть трека */
  }
  &::-webkit-scrollbar-thumb {
    background: #f44336;
  }
}

@media (max-width: 959px) {
  .player__preview__list {
    overflow-y: visible;
  }

  .player__preview__list {
    height: auto;
    max-width: 320px;
  }
}
</style>
