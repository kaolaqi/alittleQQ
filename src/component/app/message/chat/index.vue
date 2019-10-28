
<template>
  <div class="pages">
    <nav-head :is-back="true" :title="friendInfo.nickname" icon="other-pay" />
		<ul class="chat-message-list">
			<template v-for="(item, index) in messageRecords">
				<li v-if="item.userId === userId" :key="index">
					<img :src="friendInfo.avatar" alt="">
					<p>{{item.contentText}}</p>
				</li>
				<li v-else :key="index" class="left">
					<img :src="avatar" alt="">
					<p>{{item.contentText}}</p>
				</li>
			</template>
		</ul>
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
					this.friendInfo = data.data;
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
					console.log('发送消息成功', data)
				}
			})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
