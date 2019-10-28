
import ClipboardJS from 'clipboard'
import { modalAlertServer, modalMessageServer } from '@/server/modals/index'

export default {
  bind: (el, binding) => {
    var clipboard = new ClipboardJS(el)
    clipboard.on('success', e => {
      e.clearSelection()
      modalMessageServer.show(binding.value || '复制成功')
    })
    clipboard.on('error', e => {
      modalAlertServer.use({
        title: '提示',
        content: '系统版本过低，请长按选择复制',
        type: 'error',
        confirmButtonText: '关闭'
      })
    })
  }
}
