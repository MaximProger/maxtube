<template>
  <div class="mt-3">
    <h2>Comments:</h2>
    <CommentForm />
    <CommnetItem />
  </div>
</template>

<script>
import CommnetItem from '@/components/Comments/CommnetItem'
import CommentForm from '@/components/Comments/CommentForm'
export default {
  name: 'CommentsList',
  components: {
    CommnetItem,
    CommentForm
  }
}
</script>

<style lang="scss" scoped></style>
