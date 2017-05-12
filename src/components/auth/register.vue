<template>
  <mt-popup
  v-model="status"
  position="right"
  class="login-form">
    <i class="iconfont back" @click="closeRegisterFormHandle">&#xe622;</i>
    <mt-field label="用户名" placeholder="请输入用户名"  v-model="form.username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
    <mt-field label="密码验证" placeholder="验证密码" type="password" v-model="form.password"></mt-field>
    <mt-button class="btn-warning">注册</mt-button>
  </mt-popup>
</template>

<script>
export default {
  props: ['status'],
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    closeRegisterFormHandle () {
      this.$emit('closeRegisterForm')
    }
  }
}
</script>

<style lang="sass" scoped>
  .login-form
    width: 100%
    height: 100%
    padding: 50% 1em
    box-sizing: border-box
    background-image: url(../../assets/imgs/login.jpg)
  .back
    position: absolute
    top: .5em
    color: #fff
    font-size: 30px
  button
    margin-top: 1em
    width: 100%
</style>
