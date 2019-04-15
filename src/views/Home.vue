<template lang="pug">
  .container-fluid
    .row
      .col-4.mb-3
        .card.bg-light.text-dark
          .card-body.p-2
            .row
              .col
                h5.card-title New Group
            .row.mb-3
              .col
                .card-text.text-muted.text-same-w(style="font-size: 0.9em;") Create a new Group
            .row
              .col.text-right
                button.btn.btn-success.btn-sm(disabled) Add Group
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
                button.btn.btn-danger.btn-sm.mr-2.disabled(disabled) Delete
                router-link.btn.btn-info.btn-sm(:to='"/group/" + group.name' tag="button") Info
</template>
