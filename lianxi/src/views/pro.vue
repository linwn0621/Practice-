<template>
  <div>
      <h2>{{msg}}</h2>
      <button @click="jump">点击查看</button>
    <transition name="move"><router-view> </router-view></transition>

      </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      msg: ''

    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    this.id = this.$route.params.id
    console.log(this.id)
    this.getdata()
  },
  watch: {
    $route (n, o) {
      console.log(n, o)
      this.id = n.params.id
      this.getdata()
    }
  },
  methods: {
    getdata () {
      if (this.id === '1') {
        this.msg = '水果'
      } else if (this.id === '2') {
        this.msg = '面包'
      } else if (this.id === '3') {
        this.msg = '饮料'
      }
    },
    jump () {
      if (this.id === '1') {
        this.$router.push({ name: 'sg' })
      } else if (this.id === '2') {
        this.$router.push({ name: 'mb' })
      } else if (this.id === '3') {
        this.$router.push({ name: 'yl' })
      }
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
