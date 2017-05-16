<template>
  <div class="home">
    <mt-header fixed title="首 页">
      <mt-button v-show="isLogin" slot="right" class="iconfont" @click="togglePublishFun">&#xe61a;</mt-button>
    </mt-header>
    <FunsList></FunsList>
    <PublishFun
    :status="publishFunStatus"
    @toggleStatus="togglePublishFun"></PublishFun>
  </div>
</template>

<script>
import FunsList from './FunsList'
import PublishFun from './PublishFun'

export default {
  name: 'Home',
  props: ['isLogin'],
  data () {
    return {
      publishFunStatus: false
    }
  },
  methods: {
    togglePublishFun () {
      this.publishFunStatus = !this.publishFunStatus
    }
  },
  components: {
    FunsList,
    PublishFun
  }
}
</script>

<style lang="sass" scoped>
.home
  .mint-header
    background-color: #dcd9cf
    font-size: 16px
    color: #6b5547
</style>
