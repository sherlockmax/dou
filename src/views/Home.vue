<template lang="pug">
  .container-fluid
    .row
      .col-4.mb-3
        .card.bg-light.text-dark
          .card-body.p-2
            .row
              .col
                h5.card-title Main Action
            .row.mb-3
              .col
                .card-text.text-muted.text-same-w(style="font-size: 0.9em;") Enjoy you life！
            .row
              .col.text-right
                el-button(size='mini' type='info') Download All Data
                el-button(size='mini' type='success' disabled) New Group
      .col-4.mb-3(v-for="(group, key) in $store.getters.getGroupList")
        .card.bg-light.text-dark
          .card-body.p-2
            .row
              .col
                h5.card-title.text-info {{ group.name }}
            .row.mb-3
              .col
                .card-text.text-muted.text-same-w(style="font-size: 0.9em;") {{ group.token }}
            .row
              .col.text-right
                el-button(size='mini' type='danger' disabled) Delete
                el-button(:to='"/group/" + group.name' size='mini' type='primary' @click="goRouter('/group/' + group.name)") Info
</template>

<script>
export default {
  methods: {
    goRouter(routerName) {
      this.$router.push({ path: routerName })
    }
  }
}
</script>
