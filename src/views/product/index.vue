<template>
    <div id="product">
        <div class="product-area">
            <div class="left-area">
                <div class="first-layer">
                    <span>返回</span>
                </div>
                <div class="second-layer">
                    <div class="carousel-area">
                        <el-carousel :autoplay="false" height="550px" ref="coinCarousel"  @change="handleCarouselChange">
                            <el-carousel-item v-for="(img, index) in images" :key="index">
                                <img :src="img.url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="s-mg-list">
                        <img v-for="(img, index) in images" :key="index" :src="img.url" alt=""
                            :style="{ opacity: clickedSmallImages[index] ? 1 : 0.5 }"
                            @click="setOpacity(index), goToSlide(index)">
                    </div>


                </div>
            </div>
            <div class="right-area"></div>

        </div>
        <div class="interest-area"></div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElCarousel } from 'element-plus';

const coinCarousel = ref<InstanceType<typeof ElCarousel> | null>(null);
const goToSlide = (index: number) => {
    if (coinCarousel.value) {
        coinCarousel.value.setActiveItem(index);
    }
};

const clickedSmallImages = ref<Record<number, boolean>>({});

const images = ref([
    { url: '/src/assets/c1.png', opacity: 0.5, },
    { url: '/src/assets/c2.png', opacity: 0.5, }
]);

const setOpacity = (index: number) => {

    // 首先将所有图片的透明度设置为 0.5
    Object.keys(clickedSmallImages.value).forEach((key: any) => {
        clickedSmallImages.value[key] = false;
    });
    // 然后将被点击的图片的透明度设置为 1
    clickedSmallImages.value[index] = true;
};


// 当轮播项改变时更新索引
const handleCarouselChange = (index: any) => {
    setOpacity(index);
};



</script>


<style lang="scss" scoped>
#product {
    margin-top: 1px;
    width: 100%;

    .product-area {
        display: flex;
        width: 100%;
        height: 700px;

        .left-area {
            width: 50%;
            height: 100%;
            overflow: hidden;

            .first-layer {
                line-height: 30px;
                width: 100%;
                height: 30px;
            }

            .second-layer {
                height: 100%;

                .carousel-area {
                    padding: 10px 10px 0 30px;
                    width: 90%;
                    img {
                        max-width: 100%;
                    }

                }

                .s-mg-list {
                    margin-top: 10px;
                    width: 100%;
                    height: 70px;

                    img {
                        margin-right: 10px;
                        opacity: 0.5;
                        max-height: 70px;
                    }


                }

            }
        }

        .right-area {
            background-color: blue;
            width: 50%;
            height: 100%;
        }
    }

    .interest-area {
        width: 100%;
        height: 800px;
        background: green;

    }

}
</style>
