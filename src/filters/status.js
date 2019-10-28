
import provinceData from '../lib/provinceCode.js'

// 上游消费明细
function consumeTypeFilter(status) {
  switch (+status) {
    case 11:
      return '任务创建扣款'
    case 12:
      return '任务失败加款'
    default:
      return '未知状态'
  }
}

// 根据提现状态返回文本
function withdrawStatus(status) {
  switch (status) {
    case 87:
      return '审核中'
    case 88:
      return '已到账'
    case 89:
      return '未到账'
    default:
      return '未知状态'
  }
}

// 根据订单状态返回文本
function orderStatus(status) {
  switch (status) {
    case 81:
      return '审核中'
    case 82:
      return '审核中'
    case 83:
      return '已成功'
    case 84:
      return '已失败'
    case 85:
      return '已放弃'
    default:
      return '未知状态'
  }
}

// 微信扫码任务类型
function wechatScanMissionType(type) {
  switch (type) {
    case 80:
      return '微信辅助'
    default:
      return '未知状态'
  }
}

// 任务类型
function orderTypeFilter(type) {
  switch (type) {
    case 1:
      return '微信扫码辅助'
    case 2:
      return '微信解封辅助'
    default:
      return '未知状态'
  }
}

// 保证金状态
function ensureMoneyFilter(type) {
  switch (type) {
    case 41:
      return '充值'
    case 42:
      return '违规扣款'
    case 43:
      return '退还'
    case 44:
      return '申诉退款'
    default:
      return '未知状态'
  }
}

// 提现状态
function withdrawFilter(status) {
  switch (status) {
    case 87:
      return '待审核'
    case 88:
      return '转账成功'
    case 89:
      return '转账失败'
    case 90:
      return '审核不通过'
    default:
      return '未知状态'
  }
}

// 过滤省名
function provinceFilter(code) {
  var province = provinceData[code]
  if (!province) {
    return '未知地区'
  }
  return province.province
}

// 提现状态
function walletChangeType(status) {
  switch (status) {
    case 21:
      return '赏金加款'
    case 22:
      return '抽成加款'
    case 26:
      return '提现扣款'
    case 27:
      return '提现退款'
    case 49:
      return '下游邀请金额转入个人余额'
    default:
      return '未知状态'
  }
}

// 申诉状态
function appealStatus(status) {
  switch (status) {
    case 1:
      return '待审核'
    case 2:
      return '申诉成功'
    case 3:
      return '申诉失败'
    default:
      return '未知状态'
  }
}

export {
  consumeTypeFilter,
  withdrawStatus,
  orderStatus,
  wechatScanMissionType,
  orderTypeFilter,
  provinceFilter,
  ensureMoneyFilter,
  withdrawFilter,
  walletChangeType,
  appealStatus
}

