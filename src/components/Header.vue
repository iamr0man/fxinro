<template>
  <div v-on:scroll="handleScroll" class="intro">
    <h1 ref="header" class="intro__header" :style="{ fontStyle: headerStyle }">
      f x inrō
    </h1>
  </div>  
</template>

<script>
export default {
  props: {
    headerStyle: {
      type: String
    }
  },
  methods: {
    handleScroll(){
      if(window.scrollY > 1976 && window.scrollY < 2204) {
        this.$refs.header.style.transform = `scale(${window.scrollY * 0.0006})`
      }
    }
  },
  created(){
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">
  .intro {
    &__header {
      font-size: 182px;
      text-align: center;
      text-transform: uppercase;
      transform: scale(1.25);
      animation: .7s ease-out .6s 1 scaleHeader;
    }
  }

  @keyframes scaleHeader {
    0% {
    transform: scale(0.5);
    }
    100% {
      transform: scale(1.25);
    }
  }
</style>