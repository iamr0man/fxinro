<template>
  <div class="line">
    <h4 class="line__body">
      <span class="line__item">
        Что внутри
        Что внутри
        Что внутри
        Что внутри
        Что внутри
        Что внутри
        Что внутри
        </span>
    </h4>
  </div>  
</template>

<script>
export default {
  name: "LineY"
}
</script>

<style lang="scss">
.line {
  width: 100vw;
  border-bottom: 1px solid black;

  &__body {
    padding: 20px 0;
    font-size: 53.5px;
    padding-right: 160%;
    font-weight: bold;
    white-space:nowrap;
    overflow: hidden;
    animation: mar 9s linear 0s infinite;

    .line__item {
      display: inline-block;
      text-transform: uppercase;
    }
  }

  @keyframes mar {
    from {
      transform: translate3d(0,0,0)
    }
    to {
      transform: translate3d(-100%,0,0)
    }
  }
}
</style>