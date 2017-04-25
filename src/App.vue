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
@font-face
  font-family: 'iconfont'  /* project id 286774 */
  src: url('./assets/fonts/iconfont.eot');
  src: url('./assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/iconfont.woff') format('woff'),
  url('./assets/fonts/iconfont.ttf') format('truetype'),
  url('./assets/fonts/iconfont.svg#iconfont') format('svg')
.iconfont
  font-family: iconfont
  font-style: normal
body
  margin: 0
  background: #eee;

#app
  margin: 40px 0;
</style>
