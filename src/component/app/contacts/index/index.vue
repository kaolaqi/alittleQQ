
<template>
  <div class="task-index">
    <nav-head title="联系人" :avatar="avatar" icon="plus" />
    <ul class="contacts-list">
      <li v-for="item in friendList" :key="item.friendUserId" @click="goUserDetail(item.userInfo.mobile)">
        <div class="avatar">
          <img :src="item.userInfo.avatar" alt="">
        </div>
        <div class="info">
          {{ item.userInfo.nickname }}
          <p class="sign">[4G在线]他的签名</p>
        </div>
      </li>
    </ul>
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
      friendList: []
    }
  },
  computed: {
    ...mapGetters(['avatar', 'userId', 'mobile'])
  },
  created() {
    this.getFriendList()
  },
  methods: {
    getFriendList() {
      userModel.getUserFriendList({
        userId: this.userId
      }).then(data => {
        if (data.statusCode === 200) {
          this.friendList = data.result
        }
      })
    },
    goUserDetail(mobile){
      console.log(444, mobile, 999)
      this.$router.push({name: 'UserDetail', params: {mobile: mobile}})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
