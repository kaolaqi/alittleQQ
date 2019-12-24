<template>
  <div class="task-index">
    <nav-head title="联系人" :avatar="avatar" icon="plus" :on-click-custom="search" />
    <ul class="contacts-list">
      <li
        v-for="item in friendList"
        :key="item.friendUserId"
        @click="goUserDetail(item.userInfo.mobile)"
      >
        <div class="avatar">
          <img :src="item.userInfo.avatar" alt>
        </div>
        <div class="info">
          {{ item.userInfo.nickname }}
          <p class="sign">[4G在线]{{ item.userInfo.sign }}</p>
        </div>
      </li>
    </ul>
    <div v-if="showEmpt && friendList.length==0" class="no-list">
      <img src="../../../../images/date_enpty.png" alt="">
      <p>暂无好友列表</p>
      <button @click="search">添加好友</button>
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
  name: 'ContactsList',
  components: {
    footerTab,
    navHead
  },
  data() {
    return {
      friendList: [],
      showEmpt: false
    }
  },
  computed: {
    ...mapGetters(['avatar', 'userId', 'mobile'])
  },
  mounted() {
    this.getFriendList()
  },
  methods: {
    getFriendList() {
      userModel
        .getUserFriendList({
          userId: this.userId
        })
        .then(data => {
          if (data.statusCode === 200) {
            this.friendList = data.result
          }
          this.showEmpt = true
        })
    },
    goUserDetail(mobile) {
      this.$router.push({ name: 'UserDetail', params: { mobile: mobile }})
    },
    search() {
      this.$router.push({ name: 'SearchUser' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
