<template>
<div class="message">
  <mt-header fixed title="消 息"></mt-header>
  <div class="login" v-if="isLogin">
    <mt-button class="btn-success" @click="showLoginFormHandle">登录</mt-button>
    <mt-button class="btn-warning" @click="showRegisterFormHandle">注册</mt-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Message',
  props: ['isLogin'],
  data () {
    return {
    }
  },
  methods: {
    showLoginFormHandle () {
      this.$emit('showLoginForm')
    },
    showRegisterFormHandle () {
      this.$emit('showRegisterForm')
    }
  }
}
</script>

<style lang="sass" scoped>
.message
  .mint-header
    background-color: #dcd9cf
    font-size: 16px
    color: #6b5547
  .login
    padding: 1em
  button
    margin-top: 1em
    width: 100%
</style>
