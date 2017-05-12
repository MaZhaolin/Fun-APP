<template>
  <div class="fun">
    <mt-header fixed title="详 情">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'Fun',
  data () {
    return {
    }
  },
  created () {
    console.log(this.$router)
  }
}
</script>

<style lang="sass">
.fun
  .mint-button-text
    vertical-align: middle
</style>
