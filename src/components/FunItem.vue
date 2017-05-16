<template>
  <div class="fun-item" @click='toFunHandle'>
    <div class="fun-user">
      <div class="user-avatar">
        <img src="../assets/logo.png">
      </div>
      <div class="user-name">
        {{ fun.username}}
      </div>
    </div>
    <div class="fun-content">
      {{ fun.content }}
    </div>
    <div class="fun-god-comment" v-if="fun.hasGodComment">
      <comment :comment="fun.godComment"></comment>
    </div>
    <div class="fun-control">
      <div class="item">
        <i class="iconfont" @click.parent="likeHandle" >&#xe794;</i>
        <span class="count">{{ fun.likecount }}</span>
      </div>
      <div class="item">
        <i class="iconfont">&#xe763;</i>
        <span class="count">{{ fun.replycount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from './comment'
export default {
  name: 'Fun',
  props: ['fun'],
  data () {
    return {
    }
  },
  methods: {
    toFunHandle () {
      console.log(this.fun.id)
      this.$router.push({name: 'Fun', params: {id: this.fun.id}})
    },
    likeHandle () {

    }
  },
  components: {
    Comment
  }
}
</script>

<style lang="sass" scoped>
.fun-item
  padding: .5em .5em 0 .5em
  background: #fff
  .fun-user
    .user-avatar
      display: inline-block
      img
        width: 2em
        height: 2em
        border: 1px solid #ccc
        border-radius: 1em
        vertical-align: middle
    .user-name
      display: inline-block
      font-size: 0.8em
  .fun-god-comment
    background: #f3f3f3
  .fun-control
    padding: .5em
    .item
      display: inline-block
      color: #c5c5c5
      margin-right: 1em
      .fa
        vertical-align: middle
        font-size: 1.3em
        padding-right: .2em
      .count
        font-size: .7em
  .fun-content
</style>
