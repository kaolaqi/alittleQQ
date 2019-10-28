<template>
  <transition name="slide-modals">
    <div v-show="isVisible" class="modals-container">
      <div class="modal-alert">
        <div v-if="title" class="title">
          {{ title }}
        </div>
        <div class="message">
          {{ content }}
        </div>
        <div class="confirm" @click="submitComfirm">
          {{ confirmText || '确定' }}
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  name: 'ModalsAlert',
  data() {
    return {
      // 是否显示
      isVisible: false,
      // 标题
      title: '',
      // 警告ICON
      // warnIcon: false,
      // 显示文本
      content: '',
      // 按钮文本
      confirmText: '',
      // 按钮回调
      onClickConfirm: false
    }
  },
  methods: {
    // 打开
    use: function(config) {
      this.title = config.title ? config.title : '提示'
      this.content = config.content ? config.content : ''
      this.confirmText = config.confirmText ? config.confirmText : ''
      this.onClickConfirm = config.onClickConfirm ? config.onClickConfirm : ''
      this.isVisible = true
    },
    // 关闭
    hide: function() {
      this.isVisible = false
    },
    // 点击按钮
    submitComfirm: function() {
      if (this.onClickConfirm) {
        this.onClickConfirm()
      }
      this.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
    @import './main.scss';
</style>

