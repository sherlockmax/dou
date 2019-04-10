<template lang="pug">
  .container-fluid
    .action-bar
      
    .v-center.mb-3
      font-awesome-icon.mr-3.text-white(:icon="['fa', 'layer-group']")
      span.mr-3.text-white(style="width: 100px;") Group Name
      span.text-primary {{ this.$route.params.name }}
    .v-center.mb-3
      font-awesome-icon.mr-3.text-white(:icon="['fa', 'key']")
      span.mr-3.text-white(style="width: 100px;") OTP Token
      span.text-primary {{ otpToken }}
    .v-center.mb-3
      font-awesome-icon.mr-3.text-white(:icon="['fa', 'tasks']")
      span.mr-3.text-white Job List（{{ jobList.length }}）
    .mb-3
      el-table(:data='jobList' style='width: 100%' stripe :default-sort = "{prop: 'id', order: 'descending'}")
          el-table-column(type='expand')
            template(slot-scope='props')
              el-form.el-table-expand(label-position='left' inline='')
                el-form-item(label='Job ID')
                  span {{ props.row.id }}
                el-form-item(label='Name')
                  span {{ props.row.name }}
                el-form-item(label='OTP Token')
                  span {{ props.row.otp_token }}
                el-form-item(label='Active')
                  span {{ props.row.active }}
                el-form-item(label='Interval')
                  span {{ props.row.interval_pattern }}
                el-form-item(label='Execute Time')
                  span {{ props.row.exec_time }}
                el-form-item(label='Execute Command')
                  span {{ props.row.exec_cmd }}
                el-form-item(label='RequestURL')
                  span {{ props.row.request_url }}
          el-table-column(prop='name' label='Name' sortable)
          el-table-column(prop='interval_pattern' label='Interval')
          el-table-column(align='right')
            template(slot='header' slot-scope='scope')
              el-input(size='mini' placeholder='Search Box')
            template(slot-scope='scope')
              el-button(size='mini') Edit
              el-button(size='mini' type="danger") Delete

    .v-center.mb-3
      font-awesome-icon.mr-3.text-white(:icon="['fa', 'laptop-code']")
      span.mr-3.text-white Node List（{{ nodeList.length }}）
    .mb-3
      el-table(:data='nodeList' style='width: 100%' border stripe :default-sort = "{prop: 'id', order: 'descending'}")
          el-table-column(prop='name' label='Name' sortable)
          el-table-column(prop='interval_pattern' label='Interval')
</template>

<script>
import api from '@/plugins/api'

export default {
  data() {
    return {
      otpToken: '',
      jobList: [],
      nodeList: []
    }
  },
  watch: {
    $route(to) {
      this.setPageData(to.params.name)
    }
  },
  mounted() {
    this.setPageData(this.$route.params.name)
  },
  methods: {
    setPageData(groupName) {
      api.GetGroupInfo(groupName).then((info) => {
        this.otpToken = info
      })

      api.GetJobList(groupName).then((data) => {
        this.jobList = data
      })

      api.GetNodeList(groupName).then((data) => {
        this.nodeList = data
      })
    }
  }
}
</script>
