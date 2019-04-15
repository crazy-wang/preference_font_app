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
            url: '/home'
          },
          {
            className: 'iconxiazai45',
            desc: '偏好',
            url: '/preference'
          },
          {
            className: 'iconxiazai45',
            desc: '首页3',
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
  }

  .footer-nav {
    width: 375px;
    height: 54px;
    display: flex;
    justify-content: space-around;
    background-color: #000;
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
      color: #FF5B00;
    }
  }
</style>
