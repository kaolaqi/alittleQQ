
<template>
  <div class="nav-head-container" :class="{white: whiteColor}">
    <div v-if="isBack" class="nav-head-back-btn common-clear-fixed" @click="onBacK">
      <i class="cicon" :class="{'icon-return': !whiteColor, 'icon-return_white': whiteColor}" />
    </div>
    <div v-if="avatar" class="nav-head-back-btn common-clear-fixed" @click="center">
      <img :src="avatar">
    </div>
    <div class="nav-head-title common-clear-fixed" :class="{'no-shadow': noShadow}">{{ title }}</div>
    <div v-if="customBtn" class="nav-head-custom-btn common-clear-fixed" @click="onCustom">{{ customBtn }}</div>
    <div v-if="icon" class="nav-head-custom-btn common-clear-fixed" @click="onCustom">
      <van-icon :name="icon" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavHead',
  props: ['title', 'ongHistoryBack', 'isBack', 'customBtn', 'onClickCustom', 'whiteColor', 'noShadow', 'avatar', 'icon'],
  data() {
    return {
    }
  },
  methods: {
    onBacK() {
      if (this.ongHistoryBack) {
        this.ongHistoryBack()
        return false
      }
      this.$router.go(-1)
    },
    onCustom() {
      if (this.onClickCustom) {
        this.onClickCustom()
      }
    },
    center() {
      console.log('个人中心侧栏')
    }
  }
}
</script>

<style lang="scss">
    @import './index.scss';
</style>

