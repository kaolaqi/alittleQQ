<template>
  <div class="user-index-page">
    <div class="banner">
      <img :src="avatar" alt>
      <span>{{ nickname }}</span>
      <i class="cicon icon-edit" @click="showEditUsername" />
    </div>

    <div class="item-list">
      <a class="link-item" @click="nopageTip">
        <!--router-link :to="{ name: 'wallet' }"  -->
        <i class="cicon icon-wallet" />
        <span>朋友圈</span>
        <i class="cicon icon-personal_right row" />
      </a>
      <a class="link-item" @click="nopageTip">
        <i class="cicon icon-commission" />
        <span>我的相册</span>
        <i class="cicon icon-personal_right row" />
      </a>
    </div>

    <div class="logout-btn">
      <button @click="logout">退出登录</button>
    </div>
    <setUserName :is-visible="isVisible" :old-user-name="nickname" @closeEdit="closeEdit" />
    <footer-tab :active-index="3" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import footerTab from '@/component/common/footerTab/index.vue'
import setUserName from '@/component/modals/setUserName/index.vue'
import { modalAlertServer, modalConfirmServer } from '@/server/modals/index'

export default {
  name: 'User',
  components: {
    footerTab,
    setUserName
  },
  data() {
    return {
      isVisible: false,
      qnzUserPlatform: ''
    }
  },
  computed: {
    ...mapGetters(['avatar', 'nickname'])
  },
  mounted: function() {},
  beforeDestroy() {
    var layout = document.querySelector('.layout-outer')
    if (layout) {
      layout.style.background = '#fff'
    }
  },
  methods: {
    logout: function() {
      var self = this
      modalConfirmServer.use({
        title: '提示',
        content: '确定要退出登录吗？',
        confirmClick: function() {
          self.$store
            .dispatch('user/Logout')
            .then(data => {
              console.log('登路成功')
              self.$router.push({ name: 'login' })
            })
            .catch(err => {
              modalAlertServer.use({
                content: err.returnMsg
              })
            })
        }
      })
    },
    showEditUsername() {
      this.isVisible = true
    },
    closeEdit() {
      this.isVisible = false
    },
    nopageTip() {
      modalAlertServer.use({
        content: '努力开发中，敬请期待！'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
