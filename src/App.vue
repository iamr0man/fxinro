<template>
  <div id="app">
    <Header headerStyle="normal"/>
    <LiveModel />
    <Buy />
    <LiveModelWText />
    <Border />
    <Header headerStyle="italic"/>
    <Slider />
    <Blockquote />
    <ScaleModel />
    <Blockquote />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import LiveModel from '@/components/LiveModel.vue'
import Buy from '@/components/Buy.vue'
import LiveModelWText from '@/components/LiveModelWText.vue'
import Border from '@/components/Border.vue'
import Slider from '@/components/Slider.vue'
import Blockquote from '@/components/Blockquote.vue'
import ScaleModel from '@/components/ScaleModel.vue'
export default {
  name: "App",
  components: {
    Header,
    LiveModel,
    Buy,
    LiveModelWText,
    Border,
    Slider,
    Blockquote,
    ScaleModel
  }
};
</script>

<style lang="scss">
</style>
