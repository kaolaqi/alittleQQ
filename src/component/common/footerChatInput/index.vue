
<template>
  <div class="footer-input-container">
    <div class="box">
      <textarea v-model="messageText" />
      <button :class="{active: messageText}" @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterChatInput',
  data() {
    return {
      messageText: '',
      sendLock: false
    }
  },
  computed: {
    activeIndex() {
      var rootPath = this.$route.path.match(/\/(.*)\//)[1]
      return rootPath === 'message' ? 1 : rootPath === 'contacts' ? 2 : rootPath === 'user' ? 3 : ''
    }
  },
  methods: {
    sendMessage: function(type) {
      if (!this.sendLock) {
        this.sendLock = true
        this.$emit('sendMessage', this.messageText)
        this.messageText = ''
      }
      setTimeout(() => {
        this.sendLock = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>

