
<!-- 最外层的layout上面根据环境给不同的paddingtop值 -->

<template>
  <div ref="outLayout" class="layout-outer">
    <router-view />
  </div>
</template>
<script>

import dataStoreServer from '@/server/dataStore/index'

export default {
  name: 'LayoutIndex',
  data() {
    return {

    }
  },
  mounted: function() {
    var self = this
    if (location.search.indexOf('qnzDeviceId') >= 0) {
      dataStoreServer.setLongData('qnzUserPlatform', 'app')
      dataStoreServer.setLongData('qnzhuanVersion', getUrlParams('qnzVersion'))
      self.$refs.outLayout.style.paddingTop = '0.6rem'
    } else {
      dataStoreServer.setLongData('qnzUserPlatform', 'navigator')
      self.$refs.outLayout.style.paddingTop = '0'
    }

    function getUrlParams(name) {
      var reg = new RegExp('(^|&|_)' + name + '(?:=|%3D)([^&_]*)(&|_|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return decodeURIComponent(r[2])
      return null
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>

