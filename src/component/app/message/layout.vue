<template>
  <div class="layout" style="height: 100%;">
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>

export default {
  name: 'IndexLayout',
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

