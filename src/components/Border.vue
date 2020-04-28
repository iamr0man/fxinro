<template>
  <div class="border">
    <div class="border__wrapper">
      <img class="img__wrapper" src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-8473f9bd-431a-42e5-9f6b-4931f4a6f0f6.png?w=962&e=webp%202x,%20https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-8473f9bd-431a-42e5-9f6b-4931f4a6f0f6.png%253Fe=webp%203x" alt="">
      <img class="img__model" src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-7f256a7e-2563-4b2a-83f5-b1f5c674ea10.jpg?e=webp" alt="">
    </div>
    <div class="border__wrapper">
      <img class="img__wrapper" src="https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-8473f9bd-431a-42e5-9f6b-4931f4a6f0f6.png?w=962&e=webp%202x,%20https://d2kq0urxkarztv.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-8473f9bd-431a-42e5-9f6b-4931f4a6f0f6.png%253Fe=webp%203x" alt="">
      <img class="img__model" src="https://d3n32ilufxuvd1.cloudfront.net/5c0941ea4eec9445007cf1e7/1828906/upload-ec4ef811-1e3d-4fce-816c-f83c7693a410.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .border {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
      
      &__wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .img__wrapper {
          position: absolute;
          z-index: 2;
          width: 35%;
        }
        .img__model {
          width: 70%;
        }
    }
  }
</style>