
<template>
  <div class="user-index-page">
    <div class="banner">
      <img :src="avatar" alt />
      <span>{{ nickname }}</span>
      <i class="cicon icon-edit" @click="showEditUsername" />
    </div>

    <div class="item-list">
      <router-link :to="{name: 'wallet'}" class="link-item">
        <i class="cicon icon-wallet" />
        <span>钱包余额</span>
        <i class="cicon icon-personal_right row" />
      </router-link>
      <router-link :to="{name: 'commissionSetList',params:{searchPhone: 'null'}}" class="link-item">
        <i class="cicon icon-commission" />
        <span>抽成设置</span>
        <i class="cicon icon-personal_right row" />
      </router-link>
      <router-link :to="{name: 'rewardStatistic',params:{searchPhone: 'null'}}" class="link-item">
        <i class="cicon icon-bounty" />
        <span>赏金数据统计</span>
        <i class="cicon icon-personal_right row" />
      </router-link>
      <router-link :to="{name: 'taskResultAppeal'}" class="link-item">
        <i class="cicon icon-task" />
        <span>任务结果申诉</span>
        <i class="cicon icon-personal_right row" />
      </router-link>
      <router-link :to="{name: 'dockeCodeIndex'}" class="link-item">
        <i class="cicon icon-exclusive" />
        <span>我的专属对接</span>
        <i class="cicon icon-personal_right row" />
      </router-link>
    </div>

    <div class="logout-btn">
      <button @click="logout">退出登录</button>
    </div>
    <setUserName :is-visible="isVisible" :old-user-name="nickname" @closeEdit="closeEdit" />
    <footer-tab :active-index="3" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import footerTab from "@/component/common/footerTab/index.vue";
import setUserName from "@/component/modals/setUserName/index.vue";
import { modalAlertServer, modalConfirmServer } from "@/server/modals/index";

export default {
  name: "User",
  components: {
    footerTab,
    setUserName
  },
  computed: {
    ...mapGetters(["avatar", "nickname"])
  },
  data() {
    return {
      isVisible: false,
      qnzUserPlatform: ""
    };
  },
  mounted: function() {},
  beforeDestroy() {
    var layout = document.querySelector(".layout-outer");
    if (layout) {
      layout.style.background = "#fff";
    }
  },
  methods: {
    logout: function() {
      var self = this;
      modalConfirmServer.use({
        title: "提示",
        content: "确定要退出登录吗？",
        confirmClick: function() {
          self.$store
            .dispatch("user/Logout")
            .then(data => {
              console.log("登路成功");
              self.$router.push({ name: "login" });
            })
            .catch(err => {
              modalAlertServer.use({
                content: err.returnMsg
              });
            });
        }
      });
    },
    showEditUsername() {
      this.isVisible = true;
    },
    closeEdit() {
      this.isVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

