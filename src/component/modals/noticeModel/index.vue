
<template>
  <div v-if="isVisible" class="modals-component-container">
    <div class="modal-noticeModel">
      <div class="title">最新公告</div>
      <div class="content">
        <p class="time">2019-8-13 16:50:46</p>
        <div class="text">因公司内部原因，暂停该业务，请各大代理在9月1日之前提现，9月1日凌晨系统将关闭服务，谢谢配合！</div>
        <div class="btn"><button @click="close">我知道了</button></div>
        <p class="tip" @click="toogle"><span><i class="cicon" :class="{'icon-selected': selected}" /></span>不再提醒</p>
      </div>

    </div>
  </div>
</template>

<script>

import dataStoreServer from '@/server/dataStore/index'

export default {
  name: 'ModalNoticeModel',
  data() {
    return {
      selected: false
    }
  },
  methods: {
    toogle() {
      this.selected = !this.selected
    },
    close() {
      if (this.selected) {
        dataStoreServer.set('hideNoticeMode', true)
      }
      this.$emit('closeNotice')
    }
  }
}
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>
