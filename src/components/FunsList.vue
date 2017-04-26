<template>
  <div class="funs-list">
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <FunItem v-for="(fun, i) in funs" :fun="fun" :key='i'></FunItem>
    </mt-loadmore>
  </div>
</template>

<script>
import FunItem from './FunItem.vue'

export default {
  name: 'FunsList',
  data () {
    return {
      funs: [{
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
    FunItem
  }
}
</script>

<style lang="sass" scoped>
.funs-list
  .fun-item
    margin-bottom: .5em
</style>
