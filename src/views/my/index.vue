<!--
  name: home
  desc: 个人中心
-->
<template>
  <div class="lottery-hall">
    <!-- 用户信息 -->
    <div class="user-info">
      <p>
        <img src="./img/cc75798d0ec20b32.jpg" @click="toPage('/userInfo')" >
      </p>
      <p>
        <span>帐&nbsp;号: cds0715</span>
        <span>昵&nbsp;称: 好嗨哦</span>
      </p>
      <i class="iconfont icon-shuaxin"></i>
    </div>
    <!-- 用户信息 end -->

    <!-- 操作 -->
    <ul class="user-opera">
      <li @click="toPage('/recharge')">
        <i class="iconfont icon-chongzhi"></i>
        <span>待选项1</span>
      </li>
      <li>
        <i class="iconfont icon-tixian"></i>
        <span>待选项2</span>
      </li>
      <li @click="toPage('/transRecord')">
        <i class="iconfont icon-jiaoyijilu_01"></i>
        <span>待选项3</span>
      </li>
      <li @click="toPage('/noteRecord')">
        <i class="iconfont icon-touzhujilu"></i>
        <span>待选项4</span>
      </li>
    </ul>
    <!-- 操作 end -->

    <!-- user-options -->
    <ul class="user-options">
      <li @click="toPage('/userInfo')">
        <i class="iconfont icon-gerenxinxi"></i>
        <span>个人信息</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/safeCenter')">
        <i class="iconfont icon-anquanzhongxin"></i>
        <span>关注群体</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/agentCenter')">
        <i class="iconfont icon-dailizhongxin"></i>
        <span>活动管理</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/todayProfitLoss')">
        <i class="iconfont icon-yingkuitongji"></i>
        <span>总的收藏</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/myMessage')">
        <i class="iconfont icon-xiaoxi"></i>
        <span>反馈</span>
        <van-icon name="arrow" />
      </li>
    </ul>
    <!-- user-options end -->
  </div>
</template>

<script>

  export default {
    methods: {
      toPage (src) {
        this.$router.push(src)
      }
    }
  }
</script>

<style lang="scss" scoped>
.lottery-hall {
  width: 375px;
}

// user-info
.user-info {
  position: relative;
  padding: 18px;
  background: #ffffff;
  overflow: hidden;
  font-size: 17px;
  p{
    float: left;
    margin: 0;
    padding: 0;
    &:nth-child(1) {
      border-radius: 2px;
      img {
        width: 70px;
      }
    }
    &:nth-child(2) {
      margin-left: 10px;
      span {
        display: block;
        margin: 11px 0;
        line-height: 20px;
      }
    }
  }
  i:nth-child(3) {
    position: absolute;
    margin-top: 26px;
    right: 18px;
  }
}

// user-opera
.user-opera {
  display: flex;
  padding-bottom: 5px;
  background: #ffffff;
  overflow: hidden;
  font-size: 15px;
  li {
    flex: 1;
    text-align: center;
    i, span {
      display: block;
    }
    i {
      font-size: 25px;
    }
    span {
      margin: 2.5px 0;
    }
    &:nth-child(1) {
      i {
        color: #ff2323;
      }
    }
    &:nth-child(2) {
      i {
        color: #ee983d;
      }
    }
    &:nth-child(3) {
      i {
        color: #4ad2c8;
      }
    }
    &:nth-child(4) {
      i {
        color: #62a5f6;
      }
    }
  }
}

// user-options

.user-options {
  margin-top: 13px;
  background: #ffffff;
  li {
    margin: 18px 18px;
  }
}

// user-options end
.user-options {
  font-size: 17px;
  margin-left: 3px;
  overflow: hidden;
  li {
    position: relative;
    padding: 5px 0;
    height: 30px;
    border-bottom: 1px solid #eee;
    i:nth-child(1) {
      font-size: 29px;
    }
    i:nth-child(3) {
      float: right;
      margin-top: 5px;
      font-size: 14px;
      color: #cccccc;
    }
    span {
      position: absolute;
      margin-top: 7px;
      margin-left: 5px;
    }
    &:last-child::after {
      content: normal;
    }

    &:nth-child(1), &:nth-child(5) {
      i:nth-child(1) {
        color: #7885ca;
      }
    }
    &:nth-child(2) {
      i:nth-child(1) {
        color: #81c784;
      }
    }
    &:nth-child(3) {
      i:nth-child(1) {
        color: #63b4f6;
      }
    }
    &:nth-child(4) {
      i:nth-child(1) {
        color: #ffb74d;
      }
    }
  }
}
</style>

