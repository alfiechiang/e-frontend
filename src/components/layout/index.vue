
<template>
  <div id="layout">
    <header>
      <div class="first-layer">
        <div class="left-header">
          <img :src="imageSrc" alt="描述">
        </div>
        <div class="right-header"></div>
      </div>


    </header>
  </div>





  <!-- <router-view></router-view> -->
</template>
  
<script setup lang="ts">
import imageSrc from '@/assets/coin_icon.jpg';

</script>

<style lang="scss" scoped>
#layout {
  width: 70%;
  height: 100%;
  margin: 0 auto;

  header {
    width: 100%;
    height: 200px;

    .first-layer {
      width: 100%;
      height: 50%;

      background: blue;
      border-bottom: 1px solid gray;
      display: flex;
      justify-content: space-around;

      

      .left-header {
        width: 450px;
        height: 100%;
        background: green;
        display: flex;
        align-items: center;
        img{
          max-height: 50px;
        }
      }

      .right-header {
        width: 450px;
        height: 100%;
        background: green;

      }

    }

  }

}
</style>
  