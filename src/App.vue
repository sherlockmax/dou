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
        SideMenu(:groupList="$store.getters.getGroupList")
      el-main
        transition(name='page', mode='out-in')
          router-view
</template>

<script>
import LoadingModal from '@/components/LoadingModal.vue'
import SideMenu from '@/components/SideMenu.vue'
import Clock from '@/components/Clock.vue'

export default {
  components: {
    LoadingModal,
    SideMenu,
    Clock
  },
  data() {
    return {
      showContent: false
    }
  },
  mounted() {
    this.$store.dispatch('updateGuaVersion')
    this.$store.dispatch('updatePackageVersion')
    this.$store.dispatch('updateGroupList')

    setTimeout(function() {
      let l = document.getElementById('loading')
      if (l != null) {
        document.body.removeChild(l)
      }
      //$('#loading').fadeOut()
    }, 1000)
  }
}
</script>
