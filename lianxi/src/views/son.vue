<template>
  <div class="son"><h2>子组件2{{myname1}}</h2>
  <h2>我要传递{{fnname}}</h2>
  <h3>我要传给兄弟{{bfname}}</h3>
  <button @click="fsname">点击传递</button>
  <button @click="tellname">点击传递给兄弟</button>
  </div>
</template>

<script>
// 引入总线
import event from '../untils/my'
export default {
  data () {
    return {
      fnname: '你好1',
      bfname: '你好吗'

    }
  },
  props: ['myname1'],
  methods: {
    fsname () {
      this.$emit('getname1', this.fnname)
    },
    tellname () {
      event.$emit('givename', this.bfname)
    }
  }
}
</script>

<style>
.son{
background: green
}
</style>
