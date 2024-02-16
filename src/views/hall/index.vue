<template>
    <div id="hall">
        <div class="banner">
            <img :src="bannerSrc" alt="">
            <div class="second-layer">
                <span>本小店主要銷售中國歷代古泉銀銅器什件，亦兼售各國機製幣以供選購</span>
                <div class="icon-area">
                    <div class="ig-icon-area"></div>
                    <div class="fb-icon-area"></div>
                    <div class="star-icon-area"></div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang="ts">

import bannerSrc from '@/assets/banner.jpg';

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



}
</style>
    