<template>
  <div class="funs-list">
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <FunItem v-for="(fun, i) in funs" :fun="fun" :key='i'></FunItem>
    </mt-loadmore>
  </div>
</template>

<script>
import FunItem from './FunItem.vue'
import { Toast, Indicator } from 'mint-ui'

export default {
  name: 'FunsList',
  data () {
    return {
      funs: []
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadTop () {
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded()
      }, 1000)
    },
    loadData () {
      this.funs = this.$ls.get('funs')
      if (this.funs === null) {
        Indicator.open()
        this.axios.get('http://60.205.203.185:8082/rest/topic/list/1/2')
        .then(({data}) => {
          Indicator.close()
          if (data.status === 200) {
            this.funs = data.data.rows
            this.$ls.set('funs', this.funs)
          }
          Toast({
            message: data.msg,
            position: 'bottom',
            duration: 2000
          })
        })
      }
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
