<template>
  <footer class="foot-wrap">
    <div class="footer-nav">
      <div v-for="(item, index) in footerData" :key="index" class="nav-item"
           :class="{'active-item': currentItem === item.desc}" @click="toggleItem(item)">
        <i class="iconfont" :class="item.className"></i>
        <span>{{item.desc}}</span>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "footer-nav",
    data() {
      return {
        footerData: [
          {
            className: 'iconxiazai45',
            desc: '首页',
            url: '/home/index'
          },
          {
            className: 'iconxihuan',
            desc: '偏好',
            url: '/preference/index'
          },
          {
            className: 'iconego-preference',
            desc: '我的',
            url: '/c'
          }
        ],
        currentItem: '首页',
      }
    },
    methods: {
      toggleItem(value) {
        if (value.desc === this.currentItem) {
          return
        } else {
          this.currentItem = value.desc
          this.$router.push(value.url)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .foot-wrap {
    position: fixed;
    bottom: 0;
    width: 375px;
    border-top: 1px solid #333;
  }

  .footer-nav {
    width: 375px;
    height: 54px;
    display: flex;
    justify-content: space-around;
    background-color: #f2f3f5;
    font-size: 12px;
    font-weight: bold;
    color: #7C8694;
    .nav-item {
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .iconfont {
        font-size: 20px;
      }
    }
    .active-item {
      color: #1989fa;
    }
  }
</style>
