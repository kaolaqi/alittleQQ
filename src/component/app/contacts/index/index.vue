
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
          <img :src="item.userInfo.avatar" alt />
        </div>
        <div class="info">
          {{ item.userInfo.nickname }}
          <p class="sign">[4G在线]{{ item.userInfo.sign }}</p>
        </div>
      </li>
    </ul>
    <footer-tab />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { userModel } from "@/http";
import footerTab from "@/component/common/footerTab/index.vue";
import navHead from "@/component/common/navHead/index.vue";

export default {
  name: "ContactsList",
  components: {
    footerTab,
    navHead
  },
  data() {
    return {
      friendList: []
    };
  },
  computed: {
    ...mapGetters(["avatar", "userId", "mobile"])
  },
  created() {
    console.log(this.usavatarerId, this.userId, this.mobile);
    setTimeout(() => {
      this.getFriendList();
    });
  },
  methods: {
    getFriendList() {
      console.log(this.userId);
      userModel
        .getUserFriendList({
          userId: this.userId
        })
        .then(data => {
          if (data.statusCode === 200) {
            this.friendList = data.result;
          }
        });
    },
    goUserDetail(mobile) {
      this.$router.push({ name: "UserDetail", params: { mobile: mobile } });
    },
    search() {
      this.$router.push({ name: "SearchUser" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
