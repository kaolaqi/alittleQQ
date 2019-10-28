
// 时间输出格式
function dateFormat(date, format) {
  if (!format || typeof format !== 'string') {
    console.log('format is undefiend or type is Error')
  }
  // console.log(date,format)
  date = date instanceof Date ? date : (typeof date === 'number' || typeof date === 'string') ? new Date(date) : new Date()

  var formatReg = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (var reg in formatReg) {
    if (new RegExp(reg).test(format)) {
      var match = RegExp.lastMatch
      format = format.replace(match, formatReg[reg] < 10 ? '0' + formatReg[reg] : formatReg[reg].toString().slice(-match.length))
    }
  }
  return format
}

// 计算相差时分秒
function dateCountDown(countDownTime) {
  if (!countDownTime || typeof countDownTime !== 'number') {
    console.log('countDownTime is undefiend or type is Error')
    return false
  }
  var date3 = countDownTime // 时间差的毫秒数

  // ------------------------------
  // 计算出小时数
  var hours = Math.floor(date3 / (3600 * 1000))
  // 计算相差分钟数
  var leave1 = date3 % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
  var leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000))
  // 计算相差秒数
  var leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000)

  return (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
}

export { dateFormat, dateCountDown }

