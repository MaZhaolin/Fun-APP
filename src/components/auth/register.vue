<template>
  <mt-popup
  v-model="status"
  position="right"
  class="login-form">
    <i class="iconfont back" @click="closeRegisterFormHandle">&#xe622;</i>
    <mt-field label="用户名" placeholder="请输入用户名"  v-model="form.username"></mt-field>
    <mt-field label="电话" placeholder="请输入电话"  v-model="form.tel"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
    <mt-field label="密码验证" placeholder="验证密码" type="password" v-model="form.passwordValidate"></mt-field>
    <mt-button class="btn-warning" @click="registerHandle">注册</mt-button>
  </mt-popup>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'

export default {
  props: ['status'],
  data () {
    return {
      form: {
        username: '',
        tel: '',
        password: '',
        passwordValidate: ''
      }
    }
  },
  methods: {
    closeRegisterFormHandle () {
      this.$emit('closeRegisterForm')
    },
    registerHandle () {
      let form = this.form
      if (form.password !== form.passwordValidate) {
        Toast({
          message: '两次密码不一致',
          position: 'bottom',
          duration: 5000
        })
        return
      }
      let params = 'username=' + form.username + '&tel=' + form.tel + '&password=' + form.password
      Indicator.open()
      this.axios.post('http://60.205.203.185:8081/user/register/', params)
      .then(({data}) => {
        Indicator.close()
        if (data.status === 200) {
          this.$emit('closeRegisterForm')
          this.$emit('showLoginForm')
        }
        Toast({
          message: data.msg,
          position: 'bottom',
          duration: 5000
        })
      })
      .catch(() => {
        Indicator.close()
        Toast({
          message: '网络连接错误',
          position: 'bottom',
          duration: 5000
        })
      })
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
