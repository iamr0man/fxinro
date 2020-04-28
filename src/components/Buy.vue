<template>
  <div class="buy">
    <div class="buy__information information">
      <div class="information__header">
        <p>Купить</p>
      </div>
      <div class="information__price">
        2790 rub.
      </div>
      <div class="information__text">
        <p>Май — для переосмысления привычек. Мы начали с правила “Buy less but better” и выпустили косметичку F x INRŌ: практичную, изящную, пудрового цвета. Такую, что хранить ее придется на видном месте.</p>
        <p>INRŌ — бренд сумок и аксессуаров из натуральной кожи. Их особенность — сочетание простых форм, линий, архитектурного кроя и палитры классических нейтральных тонов.</p>
      </div>
    </div>
    <div class="buy__picture">
      <div class="picture__box"></div>
      <div ref="lines" class="picture__lines">
        <img class="" src="../assets/photos/lines.png" alt="lines">
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  methods: {
    handleScroll(){
      if(window.scrollY < 800) {
        this.$refs.lines.style.transform = `rotate(${window.scrollY * 0.1}deg)`
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
  $circle_size:250px;
  $size:1.5px;

  .buy {
    width: 100vw;
    padding: 30px;
    display: flex;

    &__information {
      flex: 1 1 50%;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      font-family: "Roboto", sans-serif;


      .information__header {
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        text-align: center;
      }

      .information__price {
        // display: inline;
      }

      .information__text {
        width: 80%;
        font-weight: 100;
        font-size: 20px;

        p {
          margin-top: 10px;
        }
      }
    }

    &__picture {
      flex: 1 1 50%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .picture__box{
        position:absolute;
        left: 140px;
        z-index: -1;
        margin:10px 5px;
        width:$circle_size;
        height:$circle_size;
        border-radius:50%;
        background:#5dbcd2;
        opacity: 0.27;
        
        border-top:$size*2 dotted #5dbcd2;
        border-right:$size dotted #5dbcd2;
        border-bottom:$size*2 dotted #5dbcd2;
        border-left:$size*10 dotted #5dbcd2;

        animation:spin 0.3s linear infinite;
        filter:blur(5px);
      }

      @keyframes spin{
          0%{
            border-top:$size*2 dotted #5dbcd2;
            border-right:$size dotted #5dbcd2;
            border-bottom:$size*2 dotted #5dbcd2;
            border-left:$size*10 dotted #5dbcd2;
            
            filter:blur(5px);
            transform:scale(1);
            transform:rotateZ(0deg);
          }
          25%{
            border-top-left-radius:48%;
            border-top-right-radius:45%;
            border-bottom-left-radius:45%;
            border-bottom-right-radius:48%;
            
            transform:scale(0.95);
            filter:blur(6px);
          }
          50%{
            border-top:$size dotted #5dbcd2;
            border-right:$size*10 dotted #5dbcd2;
            border-bottom:$size dotted #5dbcd2;
            border-left:$size dotted #5dbcd2;
            
            border-top-left-radius:45%;
            border-top-right-radius:48%;
            border-bottom-left-radius:48%;
            border-bottom-right-radius:45%;
            
            filter:blur(7px);
              
          }
          100%{
            border-top:$size*2 dotted #5dbcd2;
            border-right:$size dotted #5dbcd2;
            border-bottom:$size*2 dotted #5dbcd2;
            border-left:$size*10 dotted #5dbcd2;
            
            filter:blur(5px);
            transform:rotateZ(360deg);
          }
      }
    }
  }
</style>