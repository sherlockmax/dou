<template lang="pug">
  .container-fluid 
    .row.v-center.mb-3
      .col-auto(style='min-width: 185px;')
        font-awesome-icon.mr-3.text-white(:icon="['fa', 'layer-group']")
        span.mr-3.text-white(style="width: 100px;") Group Name
      .col
        span.text-primary.text-same-w {{ this.$route.params.name }}
    .row.v-center.mb-3
      .col-auto(style='min-width: 185px;')
        font-awesome-icon.mr-3.text-white(:icon="['fa', 'key']")
        span.mr-3.text-white(style="width: 100px;") OTP Token
      .col
        span.text-primary.text-same-w {{ otpToken }}
    .row.v-center.mb-3
      .col-auto(style='min-width: 185px;')
        font-awesome-icon.mr-3.text-white(:icon="['fa', 'tasks']")
        span.mr-3.text-white(style="width: 100px;")
          span.mr-1 Job List
          span.text-white.text-same-w ({{ jobList.length }})
      .col.text-right
        el-button(size='mini' type='primary' @click='addJobDialogVisible = true') Add Job
    .row.mb-3
      .col
        el-table(:data='jobList' :default-sort="{prop: 'id', order: 'descending'}")
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
                    span {{ parseUnxitime(props.row.exec_time) }}
                    i.text-warning.ml-3 Execute {{ leftTime(props.row.exec_time) }}
                  el-form-item(label='Execute Command')
                    span {{ props.row.exec_cmd }}
                  el-form-item(label='RequestURL')
                    span {{ props.row.request_url }}
            el-table-column(prop='name' label='Name' sortable)
            el-table-column(prop='interval_pattern' label='Interval')
            el-table-column(label='Exectue Time' width='240')
              template(slot-scope='scope') 
                .name-wrapper(slot='reference') {{ parseUnxitime(scope.row.exec_time) }}
                div.vh-center
                  i.text-warning Execute {{ leftTime(scope.row.exec_time) }}
            el-table-column(align='right' label='' width='170')
              template(slot-scope='scope')
                el-button(size='mini' type='success' v-if='scope.row.active == false') Active
                el-button(size='mini' type='info' v-if='scope.row.active == true') Pause
                el-button(size='mini' type='danger') Delete
    .row.v-center.mb-3
      .col-auto(style='min-width: 185px;')
        font-awesome-icon.mr-3.text-white(:icon="['fa', 'laptop-code']")
        span.mr-3.text-white(style="width: 100px;") 
          span.mr-1 Node List
          span.text-white.text-same-w ({{ nodeList.length }})
    .row.mb-3
      .col
        el-table(:data='nodeList' style='width: 100%' :default-sort = "{prop: 'id', order: 'descending'}")
            el-table-column(prop='name' label='Name' sortable)
            el-table-column(prop='interval_pattern' label='Interval')
    .row
      .col
        el-dialog.dialog-primary(title='Add Job' :visible.sync='addJobDialogVisible' width='60%')
          span
            el-form(ref='addJobForm' :model='addJobForm' label-width='150px' size="small")
              el-form-item(label='Job Name' prop='name')
                el-input(v-model='addJobForm.name')
              el-form-item(label='Execute Time' prop='exec_time')
                el-date-picker(
                  placeholder='Choose a date'
                  v-model='addJobForm.exec_time'
                  type="datetime"
                  format="yyyy-MM-dd HH:mm:ss"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  style='width: 100%;')
                .v-center.text-muted If time expired mean execute immediately         
              el-form-item(label='Request URL' prop='request_url')
                el-input(v-model='addJobForm.request_url' placeholder='HTTP@http://127.0.0.1:9999?test=yao')
                .v-center.text-muted "@": prefix REMOTE|LUA|HTTP
              el-form-item(label='Interval Pattern' prop='interval_pattern')
                el-input(v-model='addJobForm.interval_pattern')
                .v-center.text-muted 
                  span Use crontab schema or '@once' or '@every 5s', Reference 
                    a(href='http://git.border.rde/hermes/gua/blob/master/apiv1.md#cron-format' target='_blank') Here
              el-form-item(label='Execute Command' prop='exec_command')
                el-input(type='textarea' v-model='addJobForm.exec_command')
              el-form-item(label='Timeout' prop='timeout')
                el-input(v-model='addJobForm.timeout')
          span.dialog-footer(slot='footer')
            el-button(type='info' @click="resetForm('addJobForm')") Reset
            el-button(type='info' @click='addJobDialogVisible = false') Close
            el-button(type='primary' @click='handleAddJobForm()') Submit
</template>

<script>
import api from '@/plugins/api'
import moment from 'moment'

export default {
  data() {
    return {
      otpToken: '',
      jobList: [],
      nodeList: [],
      addJobDialogVisible: false,
      addJobForm: {
        group_name: '',
        name: '',
        exec_time: new Date(),
        request_url: '',
        interval_pattern: '@once',
        exec_command: '',
        timeout: 1
      }
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

      this.addJobForm.groupName = groupName
    },
    handleAddJobForm() {
      this.addJobDialogVisible = false
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    parseUnxitime(timestamp) {
      return moment.unix(timestamp).format('YYYY-MM-DD ddd HH:mm:ss Z')
    },
    leftTime(timestamp) {
      return moment.unix(timestamp).fromNow()
    }
  }
}
</script>
