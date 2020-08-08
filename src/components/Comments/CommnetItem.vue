<template>
  <div>
    <div v-for="comment of current.comments" :key="comment" class="comment">
      <p>
        {{ comment }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CommnetItem',
  methods: {
    ...mapActions(['TO_PLAY_DEFAULT']),
    playDefault() {
      this.TO_PLAY_DEFAULT()
    }
  },
  computed: {
    ...mapState(['current', 'videos', 'index'])
  },
  created() {
    this.playDefault()
  }
}
</script>

<style lang="scss" scoped>
.comment {
  &:nth-child(2n) {
    background: rgba($color: #fff, $alpha: 0.1);
  }
  p {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
