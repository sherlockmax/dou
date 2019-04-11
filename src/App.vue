<template lang="pug">
  el-container
    el-header.vh-center 
      span.brand-name
        span.text-danger G
        span.text-white U
        span.text-white A
      img.brand-logo(src="@/assets/logo.png")
      span.brand-name
        span.text-primary D
        span.text-white O
        span.text-white U
      .header-clock.text-warning.text-center.text-same-w
        Clock(:format="'YYYY-MM-DD ddd HH:mm:ss Z'")
    el-container
      el-aside(style="width: 180px")
        SideMenu(:groupList="groupList")
      el-main
        transition(name='page', mode='out-in')
          router-view
</template>

<script>
import api from '@/plugins/api'
import SideMenu from '@/components/SideMenu.vue'
import Clock from '@/components/Clock.vue'

export default {
  components: {
    SideMenu,
    Clock
  },
  data() {
    return {
      groupList: []
    }
  },
  mounted() {
    this.$store.dispatch('updateGuaVersion')
    this.$store.dispatch('updatePackageVersion')

    api.GetGroupList().then((groupList) => {
      this.groupList = groupList
    })
  }
}
</script>
