<template>
  <div class="funs-list">
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <Fun v-for="(fun, i) in funs" :fun="fun" :key='i'></Fun>
    </mt-loadmore>
  </div>
</template>

<script>
import Fun from './Fun.vue'

export default {
  name: 'FunsList',
  data () {
    return {
      funs: [{
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }]
    }
  },
  methods: {
    loadTop () {
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded()
      }, 1000)
    }
  },
  components: {
    Fun
  }
}
</script>

<style lang="sass" scoped>
.funs-list
  .fun
    margin-bottom: .5em
</style>
