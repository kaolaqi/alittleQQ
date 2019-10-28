<template>
  <transition name="slide-right">
    <div class="layout" style="height: 100%;">
      <router-view />
    </div>
  </transition>
</template>
<script>

export default {
  name: 'TaskLayout',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>

