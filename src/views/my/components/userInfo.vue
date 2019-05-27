<!--
  name: userInfo
  desc: 个人中心 -> 个人信息
-->
<template>
  <div class="userInfo">
    <div class="nav-bar">
      <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        @click-left="onClickLeft">
        <span slot="title">个人信息</span>
      </van-nav-bar>
    </div>
    <div class="content">
      <!-- 个人信息 -->
      <div class="personalData" v-if="infoStyle==='personalData'">
        <ul>
          <li class="headPortrait" @click="showAvatarSelect">
            <span>头像</span>
            <img src="../img/cc75798d0ec20b32.jpg" alt="">
            <van-icon name="arrow"/>
          </li>
          <li>
            <span>昵称</span>
            <input type="text" placeholder="请设置昵称" v-model="nickname" @blur="setNickname">
            <van-icon name="arrow"/>
          </li>
          <li>
            <span>帐号</span>
            <span>cds0715</span>
          </li>
        </ul>
        <ul>
          <li @click="toPage('/my/bindPhone')">
            <span>手机</span>
            <span>未绑定</span>
            <van-icon name="arrow"/>
          </li>
          <li @click="toPage('/my/bindEmail')">
            <span>邮箱</span>
            <span>未绑定</span>
            <van-icon name="arrow"/>
          </li>
          <li>
            <span>性别</span>
            <!--<span>保密</span>-->
            <select name="" id="" style="float: right; margin-right: 20px; border: none; outline: none;">
              <option value="1">保密</option>
              <option value="2">男</option>
              <option value="3">女</option>
            </select>
            <van-icon name="arrow"/>
          </li>
          <li>
            <span>生日</span>
            <input type="date">
            <van-icon name="arrow"/>
          </li>
        </ul>
      </div>
      <!-- 个人资料 end -->

      <!--&lt;!&ndash; 等级头衔 &ndash;&gt;-->

      <!--<div class="rankTitle" v-if="infoStyle==='rankTitle'">-->
      <!--<div class="rankTitleHeader">-->
      <!--<li>-->
      <!--<img :src="`http://${userInfo.avatar}`">-->
      <!--<p>-->
      <!--<span>{{userInfo.username}}<van-icon name="points"/> <i>测试组</i></span>-->
      <!--<span>头衔: 测试组 <i>成长值分</i></span>-->
      <!--</p>-->
      <!--</li>-->
      <!--<li>-->
      <!--距离下一级需要0分 每充值1元加1分-->
      <!--</li>-->
      <!--<li>-->
      <!--测试<span class="bar">0%</span>测试-->
      <!--</li>-->
      <!--</div>-->
      <!--<table>-->
      <!--<caption>-->
      <!--<van-icon name="question"/>-->
      <!--等级机制-->
      <!--</caption>-->
      <!--<tr>-->
      <!--<th>等级</th>-->
      <!--<th>头衔</th>-->
      <!--<th>成长积分</th>-->
      <!--</tr>-->
      <!--<tr v-for="(item, index) in levels" :key="index">-->
      <!--<td>{{item.level}}</td>-->
      <!--<td>{{item.rank}}</td>-->
      <!--<td>{{item.integral}}</td>-->
      <!--</tr>-->
      <!--</table>-->
      <!--</div>-->
      <!--&lt;!&ndash; 等级头衔 end &ndash;&gt;-->

      <!--头像选择-->
      <div class="_changeHeadImg" v-show="avatarSelectShow">
        <div class="backShaw"></div>
        <div class="changeContent">
          <h3 class="line">
            <span>修改头像</span>
            <span class="close" @click="avatarSelectShow = false">x</span>
          </h3>
          <div class="imgContent">
            <span>预览</span>
            <img id="changePhoto"
                 src="../img/cc75798d0ec20b32.jpg"
                 alt="" title="84"><span>{{avatarSelected.title}}</span>
            <div class="headImgListCon fix">
              <!--<span class="nomore"><i class="iconfont"></i></span>-->
              <div class="headImgList">
                <div class="fixedHeadImgWidth fix" style="">
                  <img @click="selectAvatar(item)" v-for="item in avatarData" :src="`http://${item.src}`" alt="">
                </div>
              </div>
              <!--<span><i class="iconfont"></i></span>-->
            </div>
            <div class="changeBtn">
              <span @click="saveAvatar" class="subBtn">保存头像</span> <span @click="avatarSelectShow = false"
                                                                         class="subBtn cancel">取消</span>
            </div>
          </div>
        </div>
      </div>
      <!--头像选择-->
    </div>
    <div style="text-align: center;">
      <van-button type="info" size="large">保 存</van-button>
    </div>
  </div>
</template>

<script>
  // import Navbar from '@/components/Navbar.vue'
  // import {mapGetters} from 'vuex'

  export default {
    name: 'userInfo',
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
      toPage(src) {
        this.$router.push(src)
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
</style>

