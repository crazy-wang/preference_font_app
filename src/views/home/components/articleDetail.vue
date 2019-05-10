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
      <div class="main-content">
        <h2 class="news-title">联想誓师大会发布新闻</h2>
        <div class="news-info">
          <div class="info-pic">
            <img src="../../../../public/img/demo1.png" alt="">
          </div>
          <div class="info-main">
            <h4>Lenovo</h4>
            <p>原创/转发 2小时前 认证信息...</p>
          </div>
          <div class="info-status">
            <van-button type="danger" size="small">关注</van-button>
          </div>
        </div>
        <div class="news-content">
          <p v-for="n in  20">{{n}}时光是万物的秤，帮我们称出了人心的重量。。。</p>
        </div>
      </div>
      <div class="main-comment">
        <div class="comment-item">
          <div class="comment-item-left">
            <img src="../../../../public/img/demo1.png" alt="">
          </div>
          <div class="comment-item-right">
            <div class="comment-item-right-top">
              <span class="user-name"></span>
              <span class="user-status"></span>
            </div>
            <div class="comment-item-right-content">
              <p>有点常识行吗</p>
            </div>
            <div class="comment-item-right-bottom">
              <span>05-01 12:23</span> <span>回复</span>
            </div>
          </div>
        </div>
      </div>
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
        this.$router.go(-1)
      },
      onClickRight() {
        console.log('拓展')
      }
    }
  }
</script>

<style lang="scss" scoped>
.main-content {
  padding: 0 10px;
  margin-top: 60px;
  border-bottom: 1px solid #ccc;
  .news-title {
    font-size: 20px;
  }
  .news-info {
    display: flex;
    margin-top: 30px;
    .info-pic, .info-main, .info-status {
      height: 50px;
    }
    .info-pic {
      width: 50px;
      border: 1px solid #333;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .info-main {
      flex: 1;
      vertical-align: top;
      margin: 0 10px;
      h4 {
        margin-bottom: 5px;
      }
      p {
        font-size: 12px;
        color: #999;
      }
    }
    .info-status {
      width: 60px;
      vertical-align: top;
    }
  }
  .news-content {
    margin-top: 30px;
    p {
      font-size: 16px;
      margin: 20px 0;
    }
  }
}
</style>
