'use strict'
// 定义全局变量，配置请求服务器地址
let host = ''
let socketUrl = ''

if (process.env.NODE_ENV === 'production') {
  // 正式环境
  host = 'http://qnz.jphd.com/ds'
  socketUrl = 'ws://192.168.1.4:8050'
} else {
  // 测试环境地址
  host = 'http://test.jphd.com/ds'
  socketUrl = 'ws://192.168.1.4:8050'
}

export {
  host,
  socketUrl
}

