<template lang="pug">
  el-container
    el-header.vh-center 
      span.brand-name.text-white G
        span.text-primary U
        span.text-white A
      img.brand-logo(src="@/assets/logo.png")
      span.brand-name.text-white D
        span.text-primary O
        span.text-white U
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

export default {
  components: {
    SideMenu
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
