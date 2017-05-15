<template>
<mt-tabbar :fixed="true" v-model="selected" class="tabbar">
  <mt-tab-item id="Home">
    <i class="iconfont">{{ selected === 'Home' ? '&#xe750;' : '&#xe751;' }}</i>
    <span>首页</span>
  </mt-tab-item>
  <mt-tab-item id="Message">
    <i class="iconfont">{{ selected === 'Message' ? '&#xe762;' : '&#xe763;' }}</i>
    <span>消息</span>
  </mt-tab-item>
</mt-tabbar>
</template>

<script>
// import router from 'vue-router'

export default {
  name: 'Tabbar',
  data () {
    return {
      selected: 'Home'
    }
  },
  created () {
    this.selected = this.$route.name
  },
  watch: {
    selected (val) {
      this.$router.push({ name: val })
    }
  }
}
</script>

<style lang="sass" scoped>
.tabbar
  background-color: #f0f1f3
  .iconfont
    display: block
    font-size: 2em
  .mint-tab-item, .mint-tab-item.is-selected
    background-color: #f0f1f3
    color: #604b3e
</style>
