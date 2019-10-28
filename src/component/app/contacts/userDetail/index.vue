
<template>
  <div class="task-index">
    <nav-head title="用户详情" :is-back="true" />
    <div class="user-detail">
      <div class="avatar">
        <img :src="userInfo.avatar" alt="">
      </div>
      <div class="info">
        {{ userInfo.nickname }}
        <p class="sign">{{ userInfo.mobile }}</p>
      </div>
    </div>
    <footer-tab />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { userModel } from '@/http'
import footerTab from '@/component/common/footerTab/index.vue'
import navHead from '@/component/common/navHead/index.vue'

export default {
  name: 'UserDetail',
  components: {
    footerTab,
    navHead
  },
  data() {
    return {
       userInfo: []
    }
  },
  // computed: {
  //   ...mapGetters(['avatar', 'userId'])
  // },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      userModel.getUserInfo({
        mobile: this.$route.params.mobile
      }).then(data => {
        console.log(data)
        if (data.statusCode === 200) {
          this.userInfo = data.data
          console.log(this.userInfo)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
