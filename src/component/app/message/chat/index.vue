
<template>
  <div class="pages">
    <div class="chat-message">
      <nav-head :is-back="true" :title="friendInfo.nickname" icon="other-pay" />
    </div>
    <footer-chat-input @sendMessage="sendMessage" />
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { userModel } from '@/http'
import navHead from '@/component/common/navHead/index.vue'
import footerChatInput from '@/component/common/footerChatInput/index.vue'
export default {
  name: 'MessageIndex',
  components: {
    navHead,
    footerChatInput
  },
  data() {
    return {
      friendInfo: {},
      messageRecords: []
    }
  },
  computed: {
    ...mapGetters(['avatar', 'userId'])
  },
  created() {
    this.getFriendInfo()
  },
  methods: {
    getFriendInfo() {
      userModel.getUserInfo({
        mobile: this.$route.params.mobile
      }).then(data => {
        if (data.statusCode === 200) {
          this.friendInfo = data.data
        }
      })
    },
    sendMessage(text) {
      userModel.sendFriendMessage({
        userId: this.userId,
        friendUserId: this.friendInfo.userId,
        contentText: text
      }).then(data => {
        if (data.statusCode === 200) {
          console.log('发送消息成功', data)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
