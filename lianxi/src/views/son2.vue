<template>
  <div class="son1"> <h3>子组件3{{myname2}}</h3></div>
</template>

<script>
export default {
  props: ['myname2']
}
</script>

<style>
.son1{
    background: yellow
}
</style>
