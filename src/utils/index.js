/**
 * 初始化页面根元素字体大小
 * @param {Number} designWidth 设计稿宽度
 * @param {Number} baseFontSize 默认初始化字体大小
 */
function initFontSize(designWidth, baseFontSize) {
  designWidth = designWidth || 750
  baseFontSize = baseFontSize || 100
  // 根据客户端宽度、设计稿宽度和初始化字体大小，计算并设置根元素字体大小
  function calculateFontSize() {
    var e = document.documentElement
    var t = e.clientWidth || 640
    e.style.fontSize = t / designWidth * baseFontSize + 'px'
  }

  calculateFontSize()

  // 监听页面分辨率改变事件
  window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', calculateFontSize)
}

export {
  initFontSize
}
