
<template>
  <div class="footer-tab-container">
    <a :class="{active : activeIndex === 1}" @click="goLink(1)">
      <!-- <i class="cicon" :class="{'icon-tab_icon_grab' : activeIndex === 1,'icon-tab_icon_grab_pre' : activeIndex !== 1}" /> -->
      <van-icon name="chat-o" size="20px" />
      <span>消息</span>
    </a>
    <a :class="{active : activeIndex === 2}" @click="goLink(2)">
      <!-- <i class="cicon" :class="{'icon-tab_icon_task' : activeIndex === 2,'icon-tab_icon_task_pre' : activeIndex !== 2}" /> -->
      <van-icon name="friends-o" size="22px" />
      <span>联系人</span>
    </a>
    <a :class="{active : activeIndex === 3}" @click="goLink(3)">
      <!-- <i class="cicon" :class="{'icon-tab_icon_personal' : activeIndex === 3,'icon-tab_icon_personal_pre' : activeIndex !== 3}" /> -->
      <van-icon name="manager-o" size="20px" />
      <span>我的</span>
    </a>
  </div>
</template>

<script>

export default {
  name: 'FooterTab',
  data() {
    return {
    }
  },
  computed: {
    activeIndex() {
      var rootPath = this.$route.path.match(/\/(.*)\//)[1]
      return rootPath === 'message' ? 1 : rootPath === 'contacts' ? 2 : rootPath === 'user' ? 3 : ''
    }
  },
  methods: {
    goLink: function(type) {
      var self = this
      if (type === self.activeIndex) {
        return
      }
      switch (type) {
        case 1:
          self.$router.push({ name: 'MessageIndex' })
          break
        case 2:
          self.$router.push({ name: 'ContactsList' })
          break
        case 3:
          self.$router.push({ name: 'user' })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>

