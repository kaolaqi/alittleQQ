// 定义全局变量，配置请求服务器地址
var socketUrl = '' // websocket服务地址

if (process.env.NODE_ENV === 'production') {
  // 正式环境
  socketUrl = 'ws://47.98.128.245:8040'
} else {
  // 测试环境地址
  socketUrl = 'ws://localhost:8050'
}

export {
  socketUrl
}
