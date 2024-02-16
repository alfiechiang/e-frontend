
<template>
  <div id="layout">
    <header>
      <div class="first-layer">
        <div class="left-header">
          <img :src="imageSrc" alt="描述">
          <span>回到從錢</span> 
          <el-icon color="#36BAA0" size="25px"><LocationFilled /></el-icon>
        </div>
        <div class="right-header">
          <span>登入／註冊</span>
          <button>
            <div class="currency-icon"></div>
            <span class="currency-unit">TWD</span>
            <span class="lang-select">繁</span>
          </button>
          <img class="shopping-icon" :src="cartIcon" alt="">

        </div>
      </div>
      <div class="second-layer">
        <ul>
          <li><span>商品</span></li>
          <li><span>送貨方式</span></li>
          <li><span>付款方式</span></li>
          <li><span>關於我們</span></li>
          <li><span>退貨及退款政策</span></li>
        </ul>

        <div class="icon-area">
          <el-icon size="20px" ><Search /></el-icon>
        <img :src="shareIcon" alt="">
        </div>
       
      </div>


    </header>
  </div>





  <!-- <router-view></router-view> -->
</template>
  
<script setup lang="ts">
import imageSrc from '@/assets/coin_icon.jpg';
import cartIcon from '@/assets/icon-cart.png';
import shareIcon from '@/assets/share.png';



</script>

<style lang="scss" scoped>
#layout {
  width: 70%;
  height: 100%;
  margin: 0 auto;

  header {
    width: 100%;
    height: 150px;

    .first-layer {
      width: 100%;
      height: 50%;
      border-bottom: 1px solid #E7E7E7;
      display: flex;
      justify-content: space-around;

      .left-header {
        width: 450px;
        height: 100%;
        display: flex;
        align-items: center;
        img{
          max-height: 50px;
          margin-right: 20px;
        }
        span{
          margin-right: 20px;
          font-size: 30px;
          font-weight: 500;
        }
      }

      .right-header {
        width: 450px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;

        .shopping-icon{
          cursor: pointer;
        }

        button:hover{
          background: #EDEDED;
          border: 1px solid #D2D2D2;
        }


        button{
          width: 125px;
          height: 35px;
          background: #fff;
          margin-left: 10px;
          border: 1px solid #EDEDED;
          display: flex;
          align-items: center;
          padding: 5px;
          cursor: pointer;
          .currency-icon{
            margin-right: 5px;
            background-image: url('../../assets/currency-icon/taiwan.png');
            height: 20px;
            width: 32px;
            background-size: cover;
          }
          .currency-unit{
            border-right: 1px solid #EDEDED;
            margin-right: 12px;
            width: 40px;
            height: 20px;
            display: flex;
            align-items: center;

          }

        }
        img{
          max-height: 22px;
          margin-left: 15px;
        }

      }

    }

    .second-layer{
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
      justify-content: space-between;
      border-bottom: 1px solid #E7E7E7;


      ul{
        display: flex;
        width: 600px;
        height: 50px;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;

        span{
          font-size: 16px;
          font-weight: 500;
          color: #222222;
        }
      }

      .icon-area{
        display: flex;
        align-items: center;
        justify-content: space-around;

        height: 100%;
        width: 110px;
      }




      img {
        max-width: 16px;
      }
    }

  }

}
</style>
  