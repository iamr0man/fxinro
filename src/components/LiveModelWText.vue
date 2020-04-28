<template>
  <div v-on:scroll="handleScroll" class="live-model">
    <div class="live-model__live-img">
      <img class="img__model" src="https://d3n32ilufxuvd1.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-22f982db-c3c8-4e2b-8b5f-1bbd4e63372d.gif" alt="live model">
    </div>
    <div class="live-model__between">
      <p ref="cos2">cos #19</p>
    </div>
    <div class="live-model__img">
      <div class="img__text">
        «В эпоху, когда рынок перенасыщен товарами, наша философия “Buy less but better” — это не дань моде, а осмысленный и ответственный подход к ведению бизнеса. Практичные, но изящные аксессуары, неподвластные быстротечным трендам, — основа гардероба. 
      </div>
      <img ref="star1" class="img__star" src="../assets/photos/star.svg" alt="star">
      <img class="img__model" src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-69964031-d9ff-446b-b74a-05d033aae4ca.jpg?w=931&e=webp 2x, https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-69964031-d9ff-446b-b74a-05d033aae4ca.jpg?e=webp 3x" alt="model">
      <img ref="star2" class="img__star" src="../assets/photos/star.svg" alt="star">
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveModelWText",
  methods: {
    handleScroll(){
      if(window.scrollY < 1471)
        this.$refs.cos2.style.top = window.scrollY /3 + 'px';
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
  .live-model {
    width: 100vw;
    height: 80vh;
    display: flex;

    &__live-img {
      flex: 1 1 35%;
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
      flex: 1 1 60%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid black;
      
      .img__star {
        width: 70px;
        animation: pulse .6s ease .1s infinite;

        @keyframes pulse {
          0% {
            transform: scale(0.7);
          }
          100% {
            transform: scale(1.1);
          }
        }

        &:last-child {
          margin-bottom: 50px;
          align-self: flex-end;
        }
        
      }

      .img__text {
        width: 40%;
        padding: 30px;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
      }

      .img__model {
        width: 30%;
      }
    }
  }
</style>