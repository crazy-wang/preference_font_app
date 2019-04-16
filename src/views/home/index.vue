<template>
    <div class="home">
      <div class="newsletter" v-for="(item, index) in newsletters" :key="index">
        <van-panel :title="item.title" :desc="item.desc" :status="item.status">
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
            <van-icon class="van-icon-close" />
          </div>
        </van-panel>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
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
                  title: '联想2019誓师大会即将举行',
                  desc: '北京时间2019-04-19联想将在国家钻石球场举行新财年誓师大会',
                  status: '火',
                  imgUrl: './img/demo1.png',
                  tips: '已关注',
                  author: '联想(官方)',
                  commentNum: '7458',
                  releaseTime: '51分钟前'
                }
              ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.newsletter {
  margin-top: 10px;
  margin-bottom: 20px;
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
