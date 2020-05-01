<template>
  <div v-on:scroll="handleScroll" ref="quote" class="blockquote">
    <div class="blockquote__main">
      <div class="blockquote__decoration-quote">,,</div>
      <div class="blockquote__quote">Косметичка — незаменимый атрибут, который вместе с тем редко оказывается за пределами ванной комнаты. Поэтому мы создали бьюти-кит F x INRŌ: эту вещь хочется носить с собой всегда».</div>
    </div>
    <div class="blockquote__author">
      <p>Элина Мурдашева, основатель бренда <span>INRŌ</span></p>
    </div>
  </div>  
</template>

<script>
export default {
  methods: {
    handleScroll(){
      if(window.scrollY > 3074 && window.scrollY < 3984) {
        this.$refs.quote.style.right = `${window.scrollY*0.2}px`
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
  .blockquote {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: translateX(977px);

    &__main {
      width: 45vw;
      display: flex;
      margin-right: 160px;
      flex-direction: column;
      text-align: left;
      letter-spacing: 2px;
      line-height: 50px;

      .blockquote__decoration-quote {
        font-size: 84px;
        margin-bottom: 10px;
      }

      .blockquote__quote {
        font-family: "Roboto";
        font-size: 44px;
      }
    }

    &__author {
      position: relative;
      width: 30vw;
      text-align: right;
      font-family: "Roboto";
      font-size: 33px;

      &::after {
        content: "";
        position: absolute;
        left: 480px;
        z-index: -1;
        margin: 10px 5px;
        width: 350px;
        height: 350px;
        border-radius: 50%;
        background: #5dbcd2;
        opacity: 0.27;
        border-top: 3px dotted #5dbcd2;
        border-right: 1.5px dotted #5dbcd2;
        border-bottom: 3px dotted #5dbcd2;
        border-left: 15px dotted #5dbcd2;
        -webkit-filter: blur(5px);
        filter: blur(22px);
      }

      span {
        color: #cddfeb;
        text-decoration: underline;
      }

      
    }
  }
</style>