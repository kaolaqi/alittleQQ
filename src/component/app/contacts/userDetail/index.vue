
<template>
  <div>
    <nav-head title="用户详情" :is-back="true" />
    <div class="user-detail">
      <div class="avatar">
        <img :src="userInfo.avatar" alt />
      </div>
      <div class="info">
        {{ userInfo.nickname }}
        <p class="sign">{{ userInfo.mobile }}</p>
      </div>
    </div>
    <div class="footer-btn">
      <button v-if="isFriend" @click="toSendMessage">发消息</button>
      <button v-else @click="addFriend">加好友</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { userModel } from "@/http";
import navHead from "@/component/common/navHead/index.vue";
import { modalAlertServer } from "@/server/modals/index";

export default {
  name: "UserDetail",
  components: {
    navHead
  },
  data() {
    return {
      userInfo: [],
      isFriend: false
    };
  },
  computed: {
    ...mapGetters(["avatar", "userId"])
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      console.log(898989);
      userModel
        .getUserInfo({
          mobile: this.$route.params.mobile
        })
        .then(data => {
          if (data.statusCode === 200) {
            this.userInfo = data.data;
            this.ckeckIsfriend();
          }
        });
    },
    ckeckIsfriend() {
      userModel
        .chickIsFriend({
          userId: this.userId,
          friendUserId: this.userInfo.userId
        })
        .then(data => {
          console.log(999, data);
          if (data.statusCode === 200) {
            this.isFriend = data.result > 0;
            console.log(999, this.isFriend);
          }
        });
    },
    addFriend() {
      var self = this;
      userModel
        .addUserFriend({
          userId: this.userId,
          friendUserId: this.userInfo.userId
        })
        .then(data => {
          if (data.statusCode === 200) {
            modalAlertServer.use({
              title: "提示",
              confirmText: "发消息",
              content: "添加好友成功",
              onClickConfirm() {
                self.$router.push({
                  name: "MessageChat",
                  params: { mobile: self.userInfo.mobile }
                });
              }
            });
          }
        });
    },
    toSendMessage() {
      this.$router.push({
        name: "MessageChat",
        params: { mobile: this.userInfo.mobile }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
