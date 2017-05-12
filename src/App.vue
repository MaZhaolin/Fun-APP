<template>
  <div id="app">
    <router-view
      @showLoginForm='showLoginForm'
      @showRegisterForm='showRegisterForm'
      :isLogin="isLogin"
    ></router-view>
    <Tabbar></Tabbar>
    <LoginForm
    :status="loginFormStatus"
    @closeLoginForm="closeLoginForm"
    ></LoginForm>
    <RegisterForm
    :status="registerFormStatus"
    @closeRegisterForm="closeRegisterForm"
    ></RegisterForm>
  </div>
</template>

<script>
import storage from 'localforage'
import Tabbar from '@/components/Tabbar'
import LoginForm from '@/components/auth/login'
import RegisterForm from '@/components/auth/register'
export default {
  name: 'app',
  data () {
    return {
      loginFormStatus: false,
      registerFormStatus: false,
      isLogin: false,
      token: false,
      user: {}
    }
  },
  created () {
    this.token = storage.setItem('token', '1')
    this.token = storage.getItem('token')
    console.log(this.token.PromiseValue)
  },
  methods: {
    showLoginForm () {
      this.loginFormStatus = true
    },
    closeLoginForm () {
      this.loginFormStatus = false
    },
    showRegisterForm () {
      this.registerFormStatus = true
    },
    closeRegisterForm () {
      this.registerFormStatus = false
    }
  },
  components: {
    Tabbar,
    LoginForm,
    RegisterForm
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
.mint-button.btn-success
    background: #20e281
    color: #fff
.mint-button.btn-warning
  background: #fbc13c
  color: #fff
.mint-toast
  z-index: 100000
</style>
