<template>
  <div class="home">
    <!--<head-nav></head-nav>-->
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
    <footer-nav v-show="showFooter"></footer-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import headNav from '@/components/headNav'
import footerNav from '@/components/footerNav'

import {mapState, mapGetters} from 'vuex'

export default {
  name: 'layout',
  data() {
    return {
      // 根据路由name来定
      showFooterUrl: ['homeIndex', 'preferenceIndex']
    }
  },
  components: {
    headNav,
    footerNav
  },
  computed: {
    ...mapState(
      ['showFooter']
    ),
    ...mapGetters(
      ['getFooterState']
    )
  },
  watch: {
    $route(to) {
      this.showFooterUrl.indexOf(to.name) === -1 ? this.$store.dispatch('hideFooter') : this.$store.dispatch('showFooter')
    }
  }
}
</script>
