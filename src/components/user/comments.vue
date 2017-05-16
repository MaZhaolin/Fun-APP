<template>
  <div>
    <mt-header fixed title="投稿互动">
      <mt-button @click="backHandle" icon="back" slot="left"></mt-button>
    </mt-header>
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  name: 'comments',
  data () {
    return {

    }
  },
  created () {
    Indicator.open()
    this.axios.get('http://60.205.203.185:8082/rest/topic/token/90a9601d-d76f-424a-b606-73db0fcccb78')
    .then(({data}) => {
      Indicator.close()
      if (status === 200) {

      }
      Toast({
        message: data.msg,
        position: 'bottom',
        duration: 2000
      })
    })
  },
  methods: {
    backHandle () {
      this.$router.back()
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
