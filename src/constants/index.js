'use strict'
// 定义全局变量，配置请求服务器地址
var host = ''
var socketUrl = ''

if (process.env.NODE_ENV === 'production') {
  // 正式环境
  host = 'http://qnz.jphd.com/ds'
  // socketUrl = 'ws://192.168.1.9:8050'
  // socketUrl = 'ws://192.168.1.6:8050'
  // socketUrl = 'ws://47.98.128.245:8050'
  socketUrl = 'ws://localhost:8050'
} else {
  // 测试环境地址
  host = 'http://test.jphd.com/ds'
  // socketUrl = 'ws://192.168.1.9:8050'
  // socketUrl = 'ws://192.168.1.6:8050'
  // socketUrl = 'ws://47.98.128.245:8050'
  socketUrl = 'ws://localhost:8050'
}

export {
  host,
  socketUrl
}
