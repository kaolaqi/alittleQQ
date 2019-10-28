<template>
  <transition name="slide-modals">
    <div v-show="isVisible" class="modals-container">
      <div class="modal-loading">
        <div class="spinner">
          <div class="cicon loadding-1 icon-loading_1" />
          <div class="cicon loadding-2 icon-loading_2" />
        </div>
        <p class="loading-content">
          {{ content }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'ModalsLoading',
  data() {
    return {
      // 是否显示
      isVisible: false,
      // 显示文本
      content: ''
    }
  },
  methods: {
    // 打开
    loading: function(message) {
      this.content = message || '加载中...'
      this.isVisible = true
    },
    // 关闭
    unload: function() {
      this.isVisible = false
    }
  }
}
</script>

<style lang="scss">
    @import './main.scss';
</style>

