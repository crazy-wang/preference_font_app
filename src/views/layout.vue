<template>
  <div class="home">
    <head-nav></head-nav>
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import headNav from '@/components/headNav'
import footerNav from '@/components/footerNav'

export default {
  name: 'layout',
  components: {
    headNav,
    footerNav
  }
}
</script>
