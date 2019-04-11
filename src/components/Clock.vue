<template lang="pug">
    span {{ dateTime }}
</template>

<script>
import moment from 'moment'

export default {
  props: {
    format: {
      type: String,
      value: 'YYYY-MM-DD ddd HH:mm:ss Z',
      required: true
    }
  },
  data() {
    return {
      dateTime: ''
    }
  },
  mounted() {
    this.tickTok()
  },
  methods: {
    tickTok() {
      this.dateTime = moment().format(this.format)
      const _this = this
      setTimeout(function() {
        if (_this && !_this._isDestroyed) {
          _this.tickTok()
        }
      }, 300)
    }
  }
}
</script>
