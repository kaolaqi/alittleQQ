<template>
  <div>
    <div class="container">
      <p>
        <i class="cicon icon-searc" />
        <input v-model="searchText" placeholder="手机号/昵称" @input="inputText">
        <van-icon v-show="showClearIcon" name="clear" color="#bbb" @click="clear" />
      </p>
      <span @click="back">取消</span>
    </div>
    <ul class="user-list">
      <li v-for="item in userList" :key="item.userId" @click="goUserDetail(item.mobile)">
        <img :src="item.avatar" alt>
        <div>
          <p>{{ item.nickname }}</p>
          <span>{{ item.mobile }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { userModel } from '@/http'
import { mapGetters } from 'vuex'

export default {
  name: 'SearchUser',
  data() {
    return {
      searchText: '',
      userList: [],
      timer: null
    }
  },
  computed: {
    ...mapGetters(['mobile']),
    showClearIcon: function() {
      return !!this.searchText
    },
    searchFlag: function() {
      return this.searchText && (!Number(this.searchText) || Number(this.searchText) && this.searchText.length > 3)
    }
  },
  methods: {
    inputText() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (this.searchFlag) {
          userModel
            .searchUserList({
              text: this.searchText,
              selfMobile: this.mobile
            })
            .then(data => {
              if (data.statusCode === 200) {
                this.userList = data.data.rows
              }
            })
        } else {
          this.userList = []
        }
      }, 600)
    },
    clear() {
      this.searchText = ''
      this.userList = []
    },
    back() {
      this.$router.back(-1)
    },
    goUserDetail(mobile) {
      this.$router.push({ name: 'UserDetail', params: { mobile: mobile }})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
