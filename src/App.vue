<template>
  <div id="app">
  <transition :name="transitionName">
    <router-view
        @showLoginForm='showLoginForm'
        @showRegisterForm='showRegisterForm'
        @logout='logout'
        :isLogin="isLogin"
      ></router-view>
  </transition>

    <Tabbar></Tabbar>
    <LoginForm
    :status="loginFormStatus"
    @closeLoginForm="closeLoginForm"
    @loadLogin="loadLogin"
    ></LoginForm>
    <RegisterForm
    :status="registerFormStatus"
    @closeRegisterForm="closeRegisterForm"
    @showLoginForm="showLoginForm"
    @loadLogin="loadLogin"
    ></RegisterForm>
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
import Tabbar from '@/components/Tabbar'
import LoginForm from '@/components/auth/login'
import RegisterForm from '@/components/auth/register'
export default {
  name: 'app',
  data () {
    return {
      loginFormStatus: false,
      registerFormStatus: false,
      isLogin: true,
      token: null,
      transitionName: 'slide-left',
      user: {}
    }
  },
  created () {
    this.loadLogin()
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
    },
    loadLogin () {
      this.token = this.$ls.get('token')
      if (this.token === null) {
        this.isLogin = false
      } else {
        Indicator.open()
        this.axios.get('http://60.205.203.185:8081/user/token/' + this.token)
        .then(data => {
          Indicator.close()
          data = data.data
          if (data.status === 200) {
            this.isLogin = true
            this.user = data.data
          } else {
            this.isLogin = false
            this.user = {}
          }
        })
        .catch(data => {
          Toast({
            message: '网络连接失败',
            position: 'bottom',
            duration: 5000
          })
        })
      }
    },
    logout () {
      this.$ls.remove('token')
      this.loadLogin()
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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
  .mint-header
    background-color: #dcd9cf
    font-size: 16px
    color: #6b5547
.mint-toast, .mint-indicator-wrapper
  z-index: 100000!important
</style>
