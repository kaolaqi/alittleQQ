
<template>
  <div class="pages">
    <nav-head :is-back="true" :ong-history-back="backMessageList" :title="friendInfo.nickname" icon="other-pay" />
    <ul class="chat-message-list">
      <template v-for="(item, index) in messageRecords">
        <li v-if="item.userId === userId" :key="index">
          <img :src="avatar" alt="">
          <p>{{ item.contentText }}</p>
        </li>
        <li v-else :key="index" class="left">
          <img :src="friendInfo.avatar" alt="">
          <p>{{ item.contentText }}</p>
        </li>
      </template>
    </ul>
    <footer-chat-input @sendMessage="sendMessage" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userModel } from '@/http'
import { socketUrl } from '@/constants/index'
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
      messageRecords: [],
      wsInstance: null,
      setChatStatusFlag: true
    }
  },
  computed: {
    ...mapGetters(['avatar', 'userId'])
  },
  created() {
    this.getFriendInfo()
  },
  mounted(){
    this.initWebSocket()
  },
  methods: {
    initWebSocket() {
      var self = this
      console.log(1212, self.userId)
      this.wsInstance = new WebSocket(socketUrl + '/id' + self.userId)
      this.wsInstance.onopen = () => {
        console.log(`userId为 ${self.userId} 的用户链接到websocket服务`)
      }
      this.wsInstance.onmessage = data => {
        console.log('服务端推送回来的消息', data.data)
        this.messageRecords.push(JSON.parse(data.data))
      }
      this.wsInstance.onclose = msg => {
        console.log(`userId为 ${self.userId} 的用户断开websocket链接`)
      }
    },
    getFriendInfo() {
      userModel.getUserInfo({
        mobile: this.$route.params.mobile
      }).then(data => {
        if (data.statusCode === 200) {
          this.friendInfo = data.data
          this.queryFriendMessage()
        }
      })
    },
    queryFriendMessage() {
      userModel.queryFriendMessage({
        userId: this.userId,
        friendUserId: this.friendInfo.userId
      }).then(data => {
        if (data.statusCode === 200) {
          this.messageRecords = data.result.rows
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
          this.messageRecords.push(data.result)
          console.log('发送消息成功', data)
          this.changeChatStatus()
          //消息发送成功之后更改聊天状态
        }
      })
    },
    changeChatStatus(){
      if(this.setChatStatusFlag){
        userModel.setInchatStatus({
          userId: this.userId,
          friendUserId: this.friendInfo.userId,
          status: 1
        }).then(data => {
          if (data.statusCode === 200) {
            console.log('发送消息成功', data)
          }
        })
      }
    },
    backMessageList() {
      this.$router.push({ name: 'MessageIndex' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
