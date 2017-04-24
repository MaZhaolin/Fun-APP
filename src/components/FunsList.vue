<template>
  <div class="funs-list">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <Fun :fun="fun"></Fun>
    </mt-loadmore>
  </div>
</template>

<script>
import Fun from './Fun.vue'

export default {
  name: 'FunsList',
  data () {
    return {
      fun: {
        isLiked: false,
        hasGodComment: true,
        godComment: {
          user: {
            avatar: '../assets/logo.png',
            username: 'chengwei'
          },
          content: '神评论啊',
          like: 666
        }
      }
    }
  },
  components: {
    Fun
  }
}
</script>

<style lang="sass" scoped>
</style>
