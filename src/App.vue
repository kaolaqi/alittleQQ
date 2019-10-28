<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { initFontSize } from '@/utils/index.js'

export default {
  name: 'App',
  created() {
    initFontSize(750)

    // ISO10以上版本禁止缩放
    var lastTouchEnd = 0
    document.addEventListener('touchstart', function(event) {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    })
    document.addEventListener('touchend', function(event) {
      var now = (new Date()).getTime()
      if (now - lastTouchEnd <= 300) {
        event.preventDefault()
      }
      lastTouchEnd = now
    }, false)

    // 阻止双指放大
    document.addEventListener('gesturestart', function(event) {
      event.preventDefault()
    })
    document.addEventListener('gestureend', function(event) {
      event.preventDefault()
    })
  }
}
</script>

<style lang="scss">
    @import './style/common.scss';
    @import './style/modals.scss';
    // @import './style/transition.scss';
    @import './style/sprite.css';
</style>
