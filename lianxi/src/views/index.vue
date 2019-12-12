<template>
<div class="fa">
      <h1>首页</h1>
      <son :myname="mysonname" @getname="jsname"></son>
      <h2>儿子传递{{mysonfnname}}</h2>
      <son1 :myname1="mysonname2" @getname1="jsname1"></son1>
      <h2>儿子1传递{{mysonfnname1}}</h2>
      <son2 :myname2="myson3"></son2>
</div>
</template>

<script>
import son from '@/views/子组件'
import son1 from '../views/son'
import son2 from '../views/son2'

export default {
  data () {
    return {
      myname: 'jack',
      mysonname: '第一个',
      mysonname2: '第二个',
      myson3: '第三个',
      mysonfnname: '???',
      mysonfnname1: '???'
    }
  },
  components: {
    son2,
    son1,
    son
  },
  methods: {
    jsname (data) {
      this.mysonfnname = data
    },
    jsname1 (data) {
      this.mysonfnname1 = data
    }
  }
}
</script>

<style>
.fa{
      background: salmon
}
</style>
