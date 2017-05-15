<template>
  <mt-popup
    v-model="status"
    position="right"
    class="publish-fun">
      <mt-header fixed title="投 稿">
      <mt-button icon="back" slot="left" @click="closeHandle"></mt-button>
      <mt-button slot="right" class="iconfont" @click="publishFunHandle">发布</mt-button>
    </mt-header>
    <textarea class="mint-field-core" v-model="text" placeholder="睡你麻痹，起来嗨"></textarea>
  </mt-popup>

</template>

<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  name: 'PublishFun',
  props: ['status'],
  data () {
    return {
      text: ''
    }
  },
  methods: {
    closeHandle () {
      this.$emit('toggleStatus')
    },
    publishFunHandle () {
      Indicator.open()
      Toast({
        message: '网络连接失败',
        position: 'bottom',
        duration: 5000
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.publish-fun
  width: 100%
  height: 100%
  padding-top: 50px
  box-sizing: border-box
textarea
  width: 100%
  height: 100%
  padding: 0 .5rem
</style>
