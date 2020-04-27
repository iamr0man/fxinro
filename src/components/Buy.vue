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
      <div class="picture__wrapper"></div>
      <div class="picture__lines">
        <img class="" src="../assets/photos/lines.png" alt="lines">
      </div>
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
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
      .picture__wrapper {
        position: absolute;
        
        width: 250px;
        height: 250px;
        background-color: #5dbcd2;
      }

    }
  }
</style>