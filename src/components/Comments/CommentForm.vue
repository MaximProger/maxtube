<template>
  <form @submit.prevent="addComment(comment)" class="commentform">
    <v-text-field
      v-model="comment"
      color="#a7acc3"
      label="Write a comment"
      required
    ></v-text-field>

    <div class="commentform__btn">
      <v-btn type="submit" color="#f44336">Write</v-btn>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CommentForm',
  data: () => ({
    comment: ''
  }),
  methods: {
    ...mapActions(['TO_ADD_COMMENT']),
    addComment(comment) {
      if (this.comment != '') {
        this.TO_ADD_COMMENT(comment)
      }
      this.comment = ''
    }
  },
  computed: {
    ...mapState(['videos', 'current'])
  }
}
</script>

<style lang="scss" scoped>
.commentform {
  margin-bottom: 20px;
}
.commentform__btn {
  text-align: right;
}
</style>
