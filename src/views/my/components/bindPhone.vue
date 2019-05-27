<!--
  name: bindPhone
  desc: 个人中心 -> 头像/个人信息 -> 手机
-->
<template>
  <div class="bindPhone">
    <!--头部-->
    <div class="nav-bar">
      <van-nav-bar
        left-text="返回"
        left-arrow
        fixed
        @click-left="onClickLeft">
        <span slot="title">绑定密保手机</span>
      </van-nav-bar>
    </div>

    <!--content-->
    <ul class="content">
      <li>
        <label for="phone">手机号</label>
        <input type="text" id="phone" placeholder="请输入您要绑定的手机号码" v-model="phone">
      </li>
      <li>
        <label for="code">验证码</label>
        <input type="text" id="code" placeholder="输入验证码" v-model="checkCode">
        <span>发送验证码</span>
      </li>
      <li>
        <label for="safePwd">安全密码</label>
        <input type="password" id="safePwd" placeholder="请输入您的安全密码" v-model="safePwd">
      </li>
      <li>
        <button @click="setPhone">确定</button>
      </li>
    </ul>
    <!--content end-->
  </div>
</template>

<script>
  // import Navbar from '@/components/Navbar.vue'
  // import { mapGetters } from 'vuex'


  export default {
    name: 'bindPhone',
    // components: {
    //   Navbar
    // },
    data() {
      return {
        phone: '',
        checkCode: '',
        safePwd: '',
      }
    },
    methods: {
      async setPhone() {
        let res = await this.axios.post('/v1/User/SetMobile', {
          mobile: this.phone,
          code: this.checkCode,
          safepwd: this.safePwd
        })
        this.$dialog.alert({
          message: res.data.message
        });
      },
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .content {
    margin-top: 50px;
    margin-bottom: 50px;
    overflow: hidden;
    background: #efeef4;
    font-size: 17px;
    li {
      padding: 15px 10px;
      background: #ffffff;
      label {
        display: inline-block;
        width: 90px;
      }
      input {
        border: none;
        outline: none;
        &::-webkit-input-placeholder {
          color: #cccccc;
        }
        &::-moz-placeholder {
          color: #cccccc;
        }
        &:-moz-placeholder {
          color: #cccccc;
        }
        &:-ms-input-placeholder {
          color: #cccccc;
        }
      }
      &:nth-child(1) {
        margin-top: 15px;
        input {
          width: 70%;
        }
      }
      &:nth-child(2) {
        input {
          width: 45%;
        }
      }
      &:nth-child(3) {
        margin-bottom: 15px;
        input {
          width: 70%;
        }
      }
      &:nth-child(4):before {
        content: none;
      }
      &:nth-child(4) {
        text-align: center;
        button {
          display: inline-block;
          width: 340px;
          height: 44px;
          border-radius: 3px;
          border: none;
          background: #db3b40;
          font-size: 20px;
          color: #ffffff;
        }
      }
    }
  }
</style>

