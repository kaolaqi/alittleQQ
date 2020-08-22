
<template>
  <div ref="outLayout" class="layout-outer">
    <router-view />
  </div>
</template>
<script>
import initWechatSdk from '@/server/sdkServer/initWechatSdk'

export default {
  name: 'LayoutIndex',
  created() {
    initWechatSdk({
      pageShareTitle: 'alitterQQ —— 一个简易的聊天室',
      pageShareURL: 'http://qq.nglmq.com/',
      pageShareimgURL: 'http://www.nglmq.com/images/avatar.jpg',
      pageShareDesc: '快来注册alittleQQ，邀请好友一起玩耍'
    })
  }
}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>
