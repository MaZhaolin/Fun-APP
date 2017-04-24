<template>
  <div class="comment">
    <div class="comment-user">
      <div class="user-avatar">
        <img src="../assets/logo.png">
      </div>
    </div>
    <div class="comment-content">
      <div class="user-name">
        {{ comment.user.username }}
      </div>
      {{ comment.content }}
    </div>
    <div class="like">
      <i class="icon"></i>
      <span class="count">166</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: ['comment'],
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
.comment
  padding: .5em 1em
  .comment-user
    display: inline-block
    vertical-align: top
    .user-avatar
      img
        width: 2em
        height: 2em
        border: 1px solid #ccc
        border-radius: 1em
  .comment-content
    display: inline-block
    .user-name
      font-size: .8em
  .like
    float: right
    font-size: .8em
    color: #8a8781
</style>
