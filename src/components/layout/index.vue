
<template>
  <div id="layout">
    <el-affix :offset="0">
    <header>
      <div class="first-layer">
        <div class="left-header">
          <img :src="imageSrc" alt="描述">
          <span>回到從錢</span>
          <el-icon color="#36BAA0" size="25px">
            <LocationFilled />
          </el-icon>
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
          <li><span class="product-font">商品</span></li>
          <li><span>送貨方式</span></li>
          <li><span>付款方式</span></li>
          <li><span>關於我們</span></li>
          <li><span>退貨及退款政策</span></li>
        </ul>

        <div class="icon-area">
          <el-icon size="20px">
            <Search />
          </el-icon>
          <img :src="shareIcon" alt="">
        </div>

      </div>
    </header>
  </el-affix>

    <div>
      <router-view></router-view>
    </div>
    <footer>
      <ul>
        <li><img :src="footerIcon" class="footer-icon"  alt=""></li>
        <li>提供電子商貿服務</li>
        <li>我們的</li>
        <li class="link">服務條款</li>
        <li>及</li>
        <li class="link">私隠條例</li>
        <li>|</li>
        <li>商舖</li>
        <li class="link">退貨及退款政策 </li>
        <li>|</li>
        <li>提出意見</li>
      </ul>
    </footer>
  </div>
</template>
  
<script setup lang="ts">
import imageSrc from '@/assets/coin_icon.jpg';
import cartIcon from '@/assets/icon-cart.png';
import shareIcon from '@/assets/share.png';
import footerIcon from '@/assets/footer-icon.png';

</script>

<style lang="scss" scoped>
#layout {

  width: 70%;
  height: 100%;
  margin: 0 auto;

  .content{
    width: 100%;
    height: 100%;
  }

  header {
    width: 100%;
    height: 120px;
    background: #fff;

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

        img {
          max-height: 50px;
          margin-right: 20px;
        }

        span {
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

        .shopping-icon {
          cursor: pointer;
        }

        button:hover {
          background: #EDEDED;
          border: 1px solid #D2D2D2;
        }


        button {
          width: 125px;
          height: 35px;
          background: #fff;
          margin-left: 10px;
          border: 1px solid #EDEDED;
          display: flex;
          align-items: center;
          padding: 5px;
          cursor: pointer;

          .currency-icon {
            margin-right: 5px;
            background-image: url('../../assets/currency-icon/taiwan.png');
            height: 20px;
            width: 32px;
            background-size: cover;
          }

          .currency-unit {
            border-right: 1px solid #EDEDED;
            margin-right: 12px;
            width: 40px;
            height: 20px;
            display: flex;
            align-items: center;

          }

        }

        img {
          max-height: 22px;
          margin-left: 15px;
        }

      }

    }

    .second-layer {
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
      justify-content: space-between;
      border-bottom: 1px solid #E7E7E7;


      ul {
        display: flex;
        width: 600px;
        height: 50px;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;

        .product-font::after {
          content: '';
          display: inline-block;
          width: 10px;
          height: 10px;
          background-image: url('../../assets/arrow-down.png');
          background-size: cover;
          margin-left: 5px; /* 调整左边距 */

        }

        span {
          font-size: 16px;
          font-weight: 500;
          color: #222222;
        }
      }

      .icon-area {
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

  footer{
    border-top: 1px solid #E6E6E6;
    width: 100%;
    height: 35px;
    padding-left: 400px;

    ul{
      height: 100%;
      width: 550px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      .link{
        cursor: pointer;
        border-bottom:1px #000 solid
      }
      .footer-icon{
        max-width: 50px;
      }
    }
  }

}
</style>
  