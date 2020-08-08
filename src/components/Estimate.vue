<template>
  <div class="mt-2">
    <div class="estimate__wrapper">
      <!-- <v-icon>
        mdi-thumb-up
      </v-icon>
      <v-icon>
        mdi-thumb-down
      </v-icon> -->
      <div class="estimate__item" @click="like">
        <v-icon v-if="!current.isLike">
          mdi-thumb-up-outline
        </v-icon>
        <v-icon v-else>
          mdi-thumb-up
        </v-icon>
        <span class="estimate__count">{{ current.likes }}</span>
      </div>
      <div class="estimate__item" @click="dislike">
        <v-icon v-if="!current.isDislike">
          mdi-thumb-down-outline
        </v-icon>
        <v-icon v-else>
          mdi-thumb-down
        </v-icon>
        <span class="estimate__count">{{ current.dislikes }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Estimate',
  methods: {
    ...mapActions(['TO_PLAY_DEFAULT', 'TO_LIKE', 'TO_DISLIKE']),
    playDefault() {
      this.TO_PLAY_DEFAULT()
    },
    like() {
      this.TO_LIKE()
    },
    dislike() {
      this.TO_DISLIKE()
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
.estimate__wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.estimate__item {
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.estimate__count {
  display: inline-block;
  margin-left: 5px;
  color: #a7acc3;
}
</style>
