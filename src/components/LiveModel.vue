<template>
  <div v-on:scroll="handleScroll" class="live-model">
    <div class="live-model__live-img">
      <img class="img__model" src="https://d3n32ilufxuvd1.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-f9cd16e6-d6ef-433f-9670-ca107f0ed527.gif" alt="live model">
    </div>
    <div class="live-model__between">
      <p ref="cos">cos #19</p>
    </div>
    <div class="live-model__img">
      <img ref="star1" class="img__star" src="../assets/photos/star.svg" alt="star">
      <img class="img__wrapper" src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-8473f9bd-431a-42e5-9f6b-4931f4a6f0f6.png?w=962&e=webp%202x,%20https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-8473f9bd-431a-42e5-9f6b-4931f4a6f0f6.png?e=webp%203x" alt="border like">
      <img class="img__model" src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-69964031-d9ff-446b-b74a-05d033aae4ca.jpg?w=931&e=webp 2x, https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-69964031-d9ff-446b-b74a-05d033aae4ca.jpg?e=webp 3x" alt="model">
      <img ref="star2" class="img__star" src="../assets/photos/star.svg" alt="star">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll(){
      if(window.scrollY < 590) {
        this.$refs.cos.style.top = window.scrollY + 'px';
        this.$refs.star1.style.transform = `rotate(${window.scrollY * 0.5}deg)`
        this.$refs.star2.style.transform = `rotate(${window.scrollY * 0.5}deg)`
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
  .live-model {
    width: 100vw;
    height: 92vh;
    display: flex;

    &__live-img {
      flex: 1 1 44%;
      height: 100%;

      border: 2px solid black;

      .img__model {
        width: 100%;
      }
    }

    &__between {
      flex: 1 1 5%;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 33px;
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      writing-mode: vertical-rl;
      font-style: italic;
      p {
        position: relative;
      }
    }

    &__img {
      flex: 1 1 55%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid black;
      
      .img__star {
        width: 70px;
      }

      .img__wrapper {
        position: absolute;
        z-index: 2;
        width: 70%;
      }
      .img__model {
        width: 70%;
      }
    }
  }
</style>