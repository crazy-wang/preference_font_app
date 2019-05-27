<!--
  name: userInfo
  desc: 个人中心 -> 个人信息
-->
<template>
  <div class="userInfo activity-manage">
    <div class="nav-bar">
      <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        @click-left="onClickLeft">
        <span slot="title">活动管理</span>
      </van-nav-bar>
    </div>
    <div class="content">

      <div class="personalData">
        <ul class="user-options">
          <li @click="toPage('收藏')">
            <i class="iconfont icon-gerenxinxi"></i>
            <span>已收藏的活动</span>
            <van-icon name="arrow" />
          </li>
          <li @click="toPage('申请')">
            <i class="iconfont icon-anquanzhongxin"></i>
            <span>已申请的活动</span>
            <van-icon name="arrow" />
          </li>
          <li @click="toPage('浏览')">
            <i class="iconfont icon-dailizhongxin"></i>
            <span>已浏览的活动</span>
            <van-icon name="arrow" />
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  // import Navbar from '@/components/Navbar.vue'
  // import {mapGetters} from 'vuex'

  export default {
    // components: {
    //   Navbar
    // },
    data() {
      return {
        infoStyle: 'personalData',
        nickname: '像风一样自由',
        avatarData: [],
        avatarSelected: '',
        avatarSelectShow: false,
      }
    },
    // computed: {
    //   ...mapGetters([
    //     'userInfo'
    //   ])
    // },
    methods: {
      // async setNickname() {
      setNickname() {
        // let res = await this.axios.post('/v1/User/SetNickname', {nickname: this.nickname})
        this.$dialog.alert({
          // message: res.data.message
          message: '昵称设置成功'
        });
      },
      async getUserAvatar() {
        let res = await this.axios.get('/v1/User/Avatar')
        this.avatarData = res.data.data
        document.getElementsByClassName('fixedHeadImgWidth')[0].style.width = `${3 * this.avatarData.length}rem`
      },
      selectAvatar(item) {
        this.avatarSelected = item
      },
      async saveAvatar() {
        let res = await this.axios.post('/v1/User/Avatar/Set', {id: this.avatarSelected.id})
        this.$dialog.alert({
          title: '提示',
          message: res.data.message
        })
        // this.$store.commit('setUserAvatar', this.avatarSelected.src)
        this.avatarSelectShow = false
      },
      showAvatarSelect() {
        this.avatarSelectShow = true
      },
      toPage(val) {
        this.$router.push({path: '/my/noData', query: {type: val}})
      },
      onClickLeft() {
        this.$router.go(-1)
      }
    },
    mounted() {
      // console.log(this.userInfo.nickname)
      // this.getUserAvatar()
      // this.nickname = this.userInfo.nickname
      // this.avatarSelected = {src: this.userInfo.avatar}
    }
  }
</script>

<style lang="scss" scoped>
  /*@import "@/styles/index.scss";*/

  // 头部的按钮
  .btn-group button {
    padding: 0;
    width: 104px;
    height: 32px;
    background: #dc3b40;
    border: 1px solid #ffffff;
    font-size: 14px;
    color: #ffffff;
    &:nth-child(1) {
      border-radius: 3px 0 0 3px;
    }
    &:nth-child(2) {
      border-radius: 0 3px 3px 0;
    }
    &.infoStyle {
      background: #ffffff;
      color: #dc3b40;
    }
  }

  // 头部的按钮 end

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  // 头部的按钮
  .btn-group {
    display: inline-block;
    height: 50px;
    line-height: 50px;
  }

  .btn-group button {
    padding: 0;
    width: 104px;
    height: 32px;
    line-height: 32px;
    background: #dc3b40;
    border: 1px solid #ffffff;
    font-size: 14px;
    color: #ffffff;
    &:nth-child(1) {
      border-radius: 3px 0 0 3px;
    }
    &:nth-child(2) {
      border-radius: 0 3px 3px 0;
    }
    &.subOpenAccount {
      background: #ffffff;
      color: #dc3b40;
    }
  }

  .content {
    margin-top: 50px;
    margin-bottom: 50px;
    overflow: hidden;
    background: #efeef4;

    // 个人资料
    .personalData{
      ul {
        background: #ffffff;
        margin-bottom: 17px;
        overflow: hidden;
        font-size: 18px;

        li:last-child::after {
          content: none
        }

        &:nth-child(1), &:nth-child(2) {
          li {
            position: relative;
            margin: 13px 21px;
            padding: 13px 0;

            // 头像
            &.headPortrait {
              padding-top: 0;
              overflow: hidden;
              span {
                float: left;
                line-height: 50px;
              }
              img {
                float: right;
                margin-right: 20px;
                width: 50px;
                border-radius: 5px;
              }
              i {
                margin-top: 18px;
              }
            }
            // 头像 end

            span {
              &:nth-child(2) {
                float: right;
                margin-right: 20px;
              }
            }

            input {
              float: right;
              margin-top: -5px;
              margin-right: 20px;
              border: none;
              text-align: right
            }

            i {
              position: absolute;
              right: 0;
              font-size: 14px;
              color: #cccccc;
              font-weight: bold;
            }
          }
        }
        &:nth-child(2) {
          li {
            i {
              top: 17px;
            }
          }
        }
      }
    }
    // 个人资料 end

    // 等级头衔
    .rankTitle {
      & > div, & > table {
        margin-bottom: 20px;
        background: #ffffff;
      }

      .rankTitleHeader {
        padding: 11px;
        background: linear-gradient(0deg, #3b052c, #6a202d);
        color: #ffffff;
        font-size: 14px;

        li:nth-child(1) {
          overflow: hidden;
          padding: 15px 0;
          img {
            float: left;
            width: 65px;
            border-radius: 32px;
            border: 3px solid #753e51;
          }
          p {
            display: inline-block;
            padding-left: 13px;
            height: 50px;
            span {
              display: block;
              line-height: 24px;
            }
          }
          i {
            margin-left: 10px;
            font-style: normal;
            color: #ecd70c;
          }
        }
        li:nth-child(3) {
          margin-bottom: 10px;
          padding: 10px 0;
          font-size: 13px;
          span {
            margin: 0 10px;
            display: inline-block;
            width: 78%;
            background: #746582;
            border-radius: 40px;
            text-align: center;
          }
        }
      }

      table, tr, th, td {
        border: 1px solid #f3eded;
        border-collapse: collapse;
        text-align: center
      }
      table {
        width: 100%;
        caption {
          padding: 13px;
          line-height: 27px;
          background: #ffffff;
          text-align: left;
          font-size: 16px;
          color: #999999;
          i {
            margin: 5px;
          }
        }
        tr {
          color: #666666;
          line-height: 38px;
          font-size: 16px;
          th {
            width: 33%;
            background: #f2f4f7;
            font-weight: normal;
          }
        }
      }
    }
    // 等级头衔 end
  }

  ._changeHeadImg {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    .backShaw {
      background: rgba(0, 0, 0, .5);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
    }
    .changeContent {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 999;
      background: #fff;
      width: 100%;
      color: #666;
      h3 {
        font-size: 20px;
        position: relative;
        line-height: 15px;
        padding: 0 10px;
        color: #333;
        z-index: 2333333333;
        height: 15px;
        span.close {
          position: absolute;
          right: 10px;
          font-size: 20px;
          color: #888;
          font-weight: 700;
          z-index: 2;
        }
      }
    }
    .imgContent {
      padding: 15px 0;
      & > span {
        display: block;
        text-align: center;
        font-size: 15px;
      }
      & > img {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: .1rem;
        margin: .2rem auto;
      }
    }
    .headImgList {
      width: 100%;
      margin: 1rem 0;
      overflow: auto;
      float: left;
      img {
        display: block;
        width: 2.5rem;
        float: left;
        border-radius: .1rem;
        margin: .25rem;
      }
    }
    .changeBtn {
      text-align: center;
      .subBtn {
        background: #e4393c;
        color: #fff;
        display: inline-block;
        width: 150px;
        font-size:15px;
        padding: .3rem 0;
        border-radius: .15rem;
      }
      .cancel {
        background: #d6d6d6;
      }
    }
  }
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

