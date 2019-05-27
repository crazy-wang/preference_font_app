<template>
  <div class="no-data-wrap">
    <div class="nav-bar">
      <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        @click-left="onClickLeft">
        <span slot="title">已{{type}}的活动</span>
      </van-nav-bar>
    </div>
    <div class="content">
      <img src="../img/timg.jpg" width="100%;">
      <p style="text-align: center; margin-top: 10vh; font-size: 20px; font-weight: bold;">您还没有{{type}}的活动</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "no-data-page",
    data() {
      return {
        type: ''
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      }
    },
    created() {
      console.log(this.$route.query.type)
      this.type = this.$route.query.type
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    margin-top: 50px;
    margin-bottom: 50px;
    /*overflow: hidden;*/
    background: #fff;
    padding-bottom: 50px;
  }
</style>
