<template>
  <div id="app">
    <Header />
    <LiveModel />
    <Buy />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import LiveModel from '@/components/LiveModel.vue'
import Buy from '@/components/Buy.vue'
export default {
  name: "App",
  components: {
    Header,
    LiveModel,
    Buy
  }
};
</script>

<style lang="scss">
</style>
