<template>
    <div id="hall">
        <div class="banner">
            <img :src="bannerSrc" alt="">
            <div class="second-layer">
                <span>本小店主要銷售中國歷代古泉銀銅器什件，亦兼售各國機製幣以供選購</span>
                <div class="icon-area">
                    <div class="ig-icon-area">
                        <img :src="igIcon" alt="">
                        <span>0</span>
                    </div>
                    <div class="fb-icon-area">
                        <img :src="fbIcon" alt="">
                        <span>1368</span>
                    </div>
                    <div class="star-icon-area">
                        <span>31</span>
                        <span>已售出</span>
                        <img :src="starIcon" alt="">
                        <img :src="starIcon" alt="">
                        <img :src="starIcon" alt="">
                        <img :src="starIcon" alt="">
                        <img :src="starIcon" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="select-area">
            <span>商品 (444)</span>

            <span>分類</span>
            <div class="select-option"></div>
        
        </div>
    </div>
</template>
    
<script setup lang="ts">

import bannerSrc from '@/assets/banner.jpg';
import igIcon from '@/assets/ig-icon.png';
import fbIcon from '@/assets/fb-icon.png';


import starIcon from '@/assets/star-icon.png';






</script>
  
<style lang="scss" scoped>
#hall {
    .banner {
        width: 100%;
        height: 600px;
        img{
            max-width: 100%;
        }
    }

    .second-layer{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        span{
            font-weight: 500;
        }

        .icon-area{
            margin-top: 20px;
            display: flex;

            .ig-icon-area{
                height: 20px;
                width: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-right: 20px;
                color: #A23AA8;
                span{
                    font-size: 12px;
                    font-weight: 200;
                }

                img{
                    max-height: 15px;
                }

            }

            .fb-icon-area{
                height: 20px;
                width: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-right: 20px;

                color: #3A5999;
                span{
                    font-size: 12px;
                    font-weight: 200;
                }

                img{
                    max-height: 15px;
                }

            }

            .star-icon-area{
                
                height: 20px;
                width: 140px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 20px;
                img{
                    max-height: 10px;
                }

                span{
                    font-size: 13px;
                    font-weight: 500;
                }

            }


        }
    }





}
</style>
    