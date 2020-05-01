<template>
  <div v-on:scroll="handleScroll" class="slider">
    <div ref="carousel" class="slider__wrapper">
      <div class="slider__carousel">
        <div class="slider__img">
          <img src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-a5d7da23-4f23-4b25-9a9e-7aeea0f92c95.jpg?e=webp" alt="">
        </div>
        <div class="slider__between">
          <p>cos #19</p>
          <p>cos #19</p>
          <p>cos #19</p>
          <p>cos #19</p>
        </div>
        <div class="slider__img">
          <img src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-d39d6cd6-7a1a-4458-ac05-9b93ace873f2.jpg?e=webp" alt="">
        </div>
        <div class="slider__between">
          <p>cos #19</p>
          <p>cos #19</p>
          <p>cos #19</p>
          <p>cos #19</p>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  methods: {
    handleScroll(){
      if(window.scrollY > 2300 && window.scrollY < 3427) {
        this.$refs.carousel.style.transform = `translateX(${window.scrollY * 0.2}px)`
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

<style lang="scss" scoped>
  .slider{
    width: 100vw;
    height: 80vh;
    margin-top: 100px;
    &__wrapper {
      height: 100%;

      .slider__carousel {
        display: flex;
        height: 100%;
        transform: translateX(-420px);

        .slider__img {
          width: 35%;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .slider__between {
          width: 5vw;
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 33px;
          border-right: 2px solid black;
          border-left: 2px solid black;
          writing-mode: vertical-rl;
          font-style: italic;
          p {
            position: relative;
          }
        }

      }

    }
  }
</style>