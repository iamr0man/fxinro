<template>
  <div class="intro">
    <h1 class="intro__header">
      f x inrō
    </h1>
  </div>  
</template>

<script>
export default {

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