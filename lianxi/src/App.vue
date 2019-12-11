<template>
<div>
  <h1></h1>

<!-- 超链接 -->
<router-link to='/index'>首页</router-link>
<router-link to='/pro/1'>产品</router-link>
<router-link to='/pro/2'>产品</router-link>
<router-link to='/pro/3'>产品</router-link>
<!-- 路由匹配的组件将渲染在这里 -->
    <transition name="move"><router-view> </router-view></transition>
</div>

</template>

<script>
export default {
  data () {
    return {
      isshow: true
    }
  }
}
</script>

<style>
.move-leave-to,
.move-enter{
    margin-left:200px;
    opacity: 0;
}
.move-leave-active,
.move-enter-active{
transition: all 1s;
}

.move-enter-to,
.move-leave{
     margin-left:0px;
     opacity: 1;
}

</style>
