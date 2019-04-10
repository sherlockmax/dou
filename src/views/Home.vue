<template lang="pug">
  .container-fluid
    .row.justify-content-center
      .col-auto.mb-3(v-for="g in groupList")
        .card.bg-light.text-dark(style='width: 18rem;')
          .card-body
            h5.card-title.text-primary {{ g }}
            .card-text test
            a.card-link(href='#') Card link
            a.card-link(href='#') Another link
</template>

<script>
import api from '@/plugins/api'

export default {
  data() {
    return {
      groupList: []
    }
  },
  mounted() {
    api.GetGroupList().then((groupList) => {
      this.groupList = groupList
    })
  }
}
</script>
