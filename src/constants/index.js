'use strict'
// 定义全局变量，配置请求服务器地址
let host = ''

if (process.env.NODE_ENV === 'production') {
  // 正式环境
  host = 'http://qnz.jphd.com/ds'
} else {
  // 测试环境地址
  host = 'http://test.jphd.com/ds'
}

export default {
  host: host
}

