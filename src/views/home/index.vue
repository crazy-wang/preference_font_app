<template>
  <div class="home">
    <div class="top-search">
      <van-field left-icon="search" v-model="searchValue" placeholder="搜索用户、学校、使馆教育处、公司及其他内容" />
    </div>
    <div class="main-content">
      <div class="newsletter" v-for="(item, index) in newsletters" :key="index" @click="goArticleDetail">
        <van-panel :title="item.title" :status="item.status">
          <div slot="header" class="newsletter-header">
            <span class="status">{{item.status}}</span>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
          <div class="newsletter-content">
            <img :src="item.imgUrl" class="newsletter-img">
          </div>
          <div slot="footer" class="newsletter-footer">
            <div class="footer-left">
              <span class="tips">{{item.tips}}</span>
              <span class="author">{{item.author}}</span>
              <span class="comment-num">{{item.commentNum}}评论</span>
              <span class="release-time">{{item.releaseTime}}</span>
            </div>
            <van-icon class="van-icon-close"/>
          </div>
        </van-panel>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        searchValue: '',
        newsletters: [
          {
            title: '联想2019誓师大会即将举行',
            desc: '北京时间2019-04-19联想将在国家钻石球场举行新财年誓师大会',
            status: '火',
            imgUrl: './img/demo1.png',
            tips: '已关注',
            author: '联想(官方)',
            commentNum: '7458',
            releaseTime: '51分钟前'
          },
          {
            title: '测试发行',
            desc: '',
            status: '',
            imgUrl: './img/demo1.png',
            tips: '未关注',
            author: '个人',
            commentNum: '8',
            releaseTime: '2小时前'
          },
          {
            title: '联想2019誓师大会',
            desc: '北京时间2019-04-19联想将在国家钻石球场举行新财年誓师大会,北京时间2019-04-19联想誓师大会',
            status: '火',
            imgUrl: './img/demo1.png',
            tips: '已关注',
            author: '联想(官方)',
            commentNum: '7458',
            releaseTime: '51分钟前'
          }
        ]
      }
    },
    methods: {
      goArticleDetail() {
        console.log('跳转到详情页')
        this.$router.push('/home/articleDetail')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-search {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
    height: 50px;
    background-color: #f2f3f5;
  }
  .main-content {
    margin-top: 50px;
  }
  .newsletter {
    margin-bottom: 20px;
    .newsletter-header {
      position: relative;
      font-size: 14px;
      overflow: hidden;
      color: #323233;
      line-height: 24px;
      padding: 10px 15px;
      border-bottom: 1px solid #ebedf0;
      margin-bottom: 5px;
      .status {
        color: #f44;
        position: absolute;
        top: 10px;
        right: 15px;
      }
      .desc {
        color: #969799;
        font-size: 12px;
        margin-top: 3px;
        line-height: 18px;
      }
    }
    .newsletter-content {
      .newsletter-img {
        width: 375px;
      }
    }
    .newsletter-footer {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #969799;
      .footer-left {
        span {
          margin-right: 10px;
          display: inline-block;
          transform: scale(0.9);
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
