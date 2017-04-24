<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  name: 'app',
  components: {
    Tabbar
  }
}
</script>

<style lang="sass">
body
  margin: 0
  background: #eee;
#app
  margin-top: 40px;
</style>
