
<template>
  <div>
    <nav-head title="消息" :avatar="avatar" icon="plus" />
    <ul class="message-list">
      <li v-for="item in chatFriendList" :key="item.friendUserId" @click="toChat(item)">
        <div class="avatar">
          <img :src="item.userInfo.avatar" alt>
        </div>
        <div class="info">
          {{ item.userInfo.nickname }}
          <p
            class="sign"
          >{{ item.userInfo.lastMessage ? item.userInfo.lastMessage.contentText : '' }}</p>
        </div>
        <span
          class="time"
        >{{ item.userInfo.lastMessage ? item.userInfo.lastMessage.createdAt : '' }}</span>
      </li>
    </ul>
    <div v-if="chatFriendList.length==0" class="no-list">
      <img src="../../../../images/date_enpty.png" alt="">
      <p>暂无聊天好友</p>
    </div>
    <footer-tab />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userModel } from '@/http'
import footerTab from '@/component/common/footerTab/index.vue'
import navHead from '@/component/common/navHead/index.vue'
export default {
  name: 'MessageIndex',
  components: {
    footerTab,
    navHead
  },
  data() {
    return {
      chatFriendList: []
    }
  },
  computed: {
    ...mapGetters(['avatar', 'userId'])
  },
  beforeRouteLeave(to, from, next) {
    // 离开当前路由组件之前执行清除事件
    next()
  },
  created() {
    this.getFriendList()
  },
  methods: {
    getFriendList() {
      userModel
        .getUserFriendList({
          userId: this.userId,
          chated: 1
        })
        .then(data => {
          if (data.statusCode === 200) {
            this.chatFriendList = data.result
          }
        })
    },
    toChat(item) {
      console.log(item)
      this.$router.push({
        name: 'MessageChat',
        params: { mobile: item.userInfo.mobile }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
