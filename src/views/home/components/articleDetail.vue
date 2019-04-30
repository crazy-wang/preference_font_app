<template>
  <div class="article-detail">
    <div class="nav-bar">
      <van-nav-bar
        left-text="返回"
        right-text="更多"
        left-arrow
        fixed
        @click-left="onClickLeft"
        @click-right="onClickRight">
        <span slot="title">Preference</span>
      </van-nav-bar>
    </div>
    <div class="main">
      <div class="main-header"></div>
      <div class="main-content"></div>
      <div class="main-comment"></div>
    </div>
    <div class="footer-bar"></div>
  </div>
</template>

<script>
  export default {
    name: "article-detail",
    data() {
      return {}
    },
    methods: {
      onClickLeft() {
        console.log('返回')
      },
      onClickRight() {
        console.log('拓展')
      }
    }
  }
</script>

<style scoped>

</style>
