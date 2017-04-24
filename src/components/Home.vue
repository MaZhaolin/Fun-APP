<template>
  <div class="home">
    <mt-header fixed title="首 页"></mt-header>
    <FunsList></FunsList>
  </div>
</template>

<script>
import FunsList from './FunsList'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    FunsList
  }
}
</script>

<style lang="sass" scoped>
.home
  .mint-header
    background-color: #c5bca6
    font-size: 16px;

</style>
