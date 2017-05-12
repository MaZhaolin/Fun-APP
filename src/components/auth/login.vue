<template>
	<mt-popup
	  v-model="status"
	  position="right"
	  class="login-form">
	    <i class="iconfont back" @click="closeLoginFormHandle">&#xe622;</i>
	    <mt-field label="用户名" placeholder="请输入用户名"  v-model="form.username"></mt-field>
	    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
	    <mt-button type="primary" @click="loginHandle">登录</mt-button>
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
        password: ''
      }
    }
  },
  methods: {
    closeLoginFormHandle () {
      this.$emit('closeLoginForm')
    },
    loginHandle () {
      Indicator.open()
      this.axios.post('http://60.205.203.185:8081/user/login', 'username=' + this.form.username + '&password=' + this.form.password)
      .then(data => {
        Indicator.close()
        data = data.data
        if (data.status === 200) {
          this.$ls.set('token', data.data)
          this.$emit('loadLogin')
          this.$emit('closeLoginForm')
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
