<template lang="pug">
  el-menu(
  default-active='2',
  background-color='#3a4149',
  text-color='#fff',
  router,
  :default-active="$route.path"
  :default-openeds="['group-list']")
    el-menu-item(index='/')
      i.el-icon-setting
      span(slot='title') Main Panel
    el-submenu(index='group-list')
      template(slot='title')
        i.el-icon-location
        span Group List
      el-menu-item-group
        el-menu-item(v-for="group in groupList" :key="group" :index="'/group/'+group") {{ group }}
    el-submenu(index='language')
      template(slot='title')
        i.el-icon-location
        span Language
      el-menu-item-group
        el-menu-item(:index="'/lang/zh-tw'") 繁體中文
        el-menu-item(:index="'/lang/cn-us'") English
    el-menu-item(index='/about')
      i.el-icon-setting
      span(slot='title') About
</template>

<script>
export default {
  props: {
    groupList: {
      type: Array,
      value: [],
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
