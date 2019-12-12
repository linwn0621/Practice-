<template>
  <div class="son">
      <h2>我是子组件1{{myname}}</h2>
      <h2>我要传递{{fnname}}</h2>
<h3>兄弟传给我{{xdname}}</h3>
      <button @click="tell">点击传递</button>
  </div>
</template>

<script>
import event from '../untils/my'
export default {
  data () {
    return {

      fnname: '你好',
      xdname: '???'

    }
  },
  props: ['myname'],
  methods: {
    tell () {
      this.$emit('getname', this.fnname)
    }
  },
  mounted () {
    event.$on('givename', (data) => {
      console.log(data)
      this.xdname = data
    })
  }
}
</script>

<style scoped>
.son{
    background: red
}
</style>
