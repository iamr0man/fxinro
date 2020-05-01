<template>
  <div v-on:scroll="handleScroll" class="scaleModel">
    <div class="scaleModel__item">
      <img ref="s_model1" class="item__img" src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-3d523576-062f-4f3d-9079-9edbee994c1c.jpg?w=962&e=webp" alt="">
    </div>
    <div class="scaleModel__between">
      <p>cos #19</p>
      <p>cos #19</p>
      <p>cos #19</p>
      <p>cos #19</p>
    </div>
    <div class="scaleModel__item">
      <img ref="s_model2" class="item__img" src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-60149883-6cb4-4ed1-bd27-b4fa511e80ce.jpg?w=965&e=webp" alt="">
    </div>
    <div class="scaleModel__between">
      <p>cos #19</p>
      <p>cos #19</p>
      <p>cos #19</p>
      <p>cos #19</p>
    </div>
    <div class="scaleModel__item">
      <img ref="s_model3" class="item__img" src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-9555f18b-d022-4853-bc25-5b58c3fc10c9.jpg?w=965&e=webp" alt="">
    </div>
  </div>  
</template>

<script>
export default {
  methods: {
    handleScroll(){
      // let current = this.$refs['s_model1'].style.transform.slice(6, 9);
      // if(window.scrollY > 3785 && window.scrollY < 3866) {
      //   this.$refs['s_model1'].style.transform = `scale(${(current || 1) - 0.01})`
      //   this.$refs['s_model2'].style.transform = `scale(${(current || 1) - 0.01})`
      //   this.$refs['s_model3'].style.transform = `scale(${(current || 1) - 0.01})`
      // }
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
  .scaleModel {
    width: 100vw;
    height: 70vh;
    display: flex;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    // transform: scale(1.0);

    &__item {
      flex: 1 1 30%;

      .item__img {
        width: 100%;
        height: 100%;
      }
    }

    &__between {
      width: 5vw;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 33px;
      border-right: 2px solid black;
      border-left: 2px solid black;
      writing-mode: vertical-rl;
      font-style: italic;
    }
  }
</style>