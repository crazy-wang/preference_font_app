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
          <p v-for="n in  20">{{n}}时光是万物的秤，帮我们大家称出了人心的重量啊啊。。。</p>
        </div>
      </div>
      <div class="main-comment">
        <div class="comment-item">
          <div class="comment-item-left">
            <img src="../../../../public/img/demo1.png" alt="">
          </div>
          <div class="comment-item-right">
            <div class="comment-item-right-top">
              <span class="user-name">俺有小果果吃</span>
              <span class="user-status"> <i class="iconfont iconlike"></i>赞 </span>
            </div>
            <div class="comment-item-right-content">
              <p>有点常识行吗</p>
            </div>
            <div class="comment-item-right-bottom">
              <span>05-01 12:23</span> <span style="margin-left: 10px;">回复</span>
            </div>
          </div>
        </div>
        <div class="comment-item">
          <div class="comment-item-left">
            <img src="../../../../public/img/demo1.png" alt="">
          </div>
          <div class="comment-item-right">
            <div class="comment-item-right-top">
              <span class="user-name">俺有小果果吃</span>
              <span class="user-status"> <i class="iconfont iconlike"></i>赞 </span>
            </div>
            <div class="comment-item-right-content">
              <p>我是用来测试的，嘻嘻哈哈，有时找我就好了好不i的顾客卡夫卡的看见对方肯德基访</p>
            </div>
            <div class="comment-item-right-bottom">
              <span>05-01 12:23</span> <span style="margin-left: 10px;">回复</span>
            </div>
          </div>
        </div>
        <div class="comment-item">
          <div class="comment-item-left">
            <img src="../../../../public/img/demo1.png" alt="">
          </div>
          <div class="comment-item-right">
            <div class="comment-item-right-top">
              <span class="user-name">俺有小果果吃</span>
              <span class="user-status"> <i class="iconfont iconlike"></i>赞 </span>
            </div>
            <div class="comment-item-right-content">
              <p>有点常识行吗</p>
            </div>
            <div class="comment-item-right-bottom">
              <span>05-01 12:23</span> <span style="margin-left: 10px;">回复</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bar">
      <van-row gutter="10">
        <van-col span="12">
          <van-field v-model="inputValue" left-icon="edit" placeholder="写评论..." />
        </van-col>
        <van-col span="4" class="footer-bar-right">
          <van-icon name="chat-o" info="3" />
        </van-col>
        <van-col span="4" class="footer-bar-right">
          <van-icon name="star-o" />
        </van-col>
        <van-col span="4" class="footer-bar-right">
          <van-icon name="share" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "article-detail",
    data() {
      return {
        inputValue: ''
      }
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
  .article-detail {
    margin-bottom: 100px;
  }
  .main {
    margin: 0 10px;
  }
  .main-content {
    margin: 60px 0 30px;
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
  .main-comment {
    .comment-item {
      display: flex;
      margin-bottom: 30px;
      .comment-item-left {
        height: 40px;
        width: 40px;
        border: 1px solid #333;
        border-radius: 50%;
        overflow: hidden;
      }
      .comment-item-right {
        flex: 1;
        margin-left: 10px;
        .comment-item-right-top {
          display: flex;
          margin-bottom: 10px;
          font-size: 14px;
          .user-name {
            flex: 1;
            color: #409eff;
          }
          .user-status {
            width: 50px;
            i {
              margin-right: 4px;
            }
          }
        }
        .comment-item-right-content {
          font-size: 16px;
          margin-bottom: 4px;
        }
        .comment-item-right-bottom {
          font-size: 12px;
        }
      }
    }
  }
  .footer-bar {
    background-color: #fff;
    height: 50px;
    width: 100%;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    padding: 0 0 0 5px;
    .van-col {
      height: 50px;
      text-align: center;
      vertical-align: middle;
    }
    .footer-bar-right {
      font-size: 26px;
      padding-top: 8px;
      i {
        vertical-align: middle;
      }
    }
    .van-field {
      background: #eee;
      height: 40px;
      border-radius: 20px;
      margin-top: 5px;
    }
  }
</style>
