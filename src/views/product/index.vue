<template>
    <div id="product">
        <div class="product-area">
            <div class="left-area">
                <div class="first-layer">
                    <span>返回</span>
                </div>
                <div class="second-layer">
                    <div class="carousel-area">
                        <el-carousel :autoplay="false" height="550px" ref="coinCarousel" @change="handleCarouselChange">
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
            <div class="right-area">
                <h2>康熙通寶 寶泉羅漢特大樣</h2>
                <div class="price-area">
                    <span>4,380.00</span>
                </div>
                <span class="num-font">數量</span>
                <div class="num-area">
                    <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
                    <span>剩餘: 1</span>
                </div>
                <a class="buy-button">購買</a>
                <div class="content-area">
                    <div class="title-area">
                        <span id="t1" @click="addContentTitleBottomLine('t1')"
                            :style="{ borderBottom: TitleBottomLine === 't1' ? '2px solid #AFAFAF' : '' }">簡介</span>
                        <span id="t2" @click="addContentTitleBottomLine('t2')"
                            :style="{ borderBottom: TitleBottomLine === 't2' ? '2px solid #AFAFAF' : '' }">付款、送貨及退貨</span>
                    </div>
                    <div class="t1-box" :style="{ display: TitleBottomLine === 't1' ? 'block' : 'none' }">
                        <span>公博評級 美82 厚重</span>
                    </div>
                    <div class="t2-box" :style="{ display: TitleBottomLine === 't2' ? 'block' : 'none' }">

                        <div class="c1">
                            <span>送貨方式</span>
                            <ul>
                                <li>本地送貨</li>
                                <li>本地取貨</li>
                                <li>國際送貨</li>
                            </ul>
                        </div>
                        <div class="c2">
                            <span>付款方式</span>
                            <ul>
                                <li>以 信用卡 付款</li>
                                <li>以 信用卡 / PayPal Wallet 付款</li>
                                <li>銀行轉帳</li>
                            </ul>
                        </div>
                        <div class="c3">
                            <span>退貨及退款政策</span>
                            <p>本店售出商品一律包老,包真,包入盒,裸幣60天內不入盒包退(請保持原狀，没有清洗下)，本店將負責來回運費，請放心選購！</p>

                            <p>*古泉以公博/華夏/中乾/保粹/古泉園地/眾誠/通寶等評級公司鑑定結果為準,機鑄幣則以PCGS/NGC/公博等鑑定結果為準，評級幣售出不退*</p>
                        </div>



                    </div>



                </div>
                <div class="commemt-area"></div>
            </div>

        </div>
        <div class="interest-area"></div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElCarousel } from 'element-plus';

const TitleBottomLine = ref('t1');
const num = ref(1)
const handleChange = (value: number) => {
    console.log(value)
}

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


const addContentTitleBottomLine = (id: string) => {
    TitleBottomLine.value = id;
}





</script>


<style lang="scss" scoped>
#product {
    margin-top: 1px;
    width: 100%;

    .product-area {
        display: flex;
        width: 100%;

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
            padding-top: 40px;
            width: 50%;
            height: 100%;

            .price-area {
                margin-top: 15px;

                span {
                    color: #999999;
                    font-size: 20px;
                }
            }

            .num-font {
                display: block;
                margin-top: 30px;
                font-size: 14px;
                font-weight: 500;
                color: #555555;
            }

            .num-area {
                margin-top: 10px;
                width: 200px;
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                    color: #8C8C8C;
                    font-size: 13px;
                }
            }

            .buy-button {
                margin-top: 15px;
                text-align: center;
                display: block;
                width: 160px;
                height: 35px;
                line-height: 35px;
                background: #FB6D0B;
                color: #fff;
                font-size: 14px;
                border-radius: 2px;
                cursor: pointer;
            }

            .content-area {

                .title-area {
                    margin-top: 20px;
                    width: 500px;
                    height: 50px;
                    display: flex;
                    justify-content: space-around;
                    border: 1px solid #EEEEEE;


                    span {
                        color: #555555;
                        font-size: 16px;
                        display: block;
                        width: 150px;
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                        cursor: pointer;
                        font-weight: 500;

                    }

                }

                //AFAFAF

                .t1-box {
                    border: 1px solid #EEEEEE;
                    border-top: none;
                    width: 500px;
                    height: 100px;
                    padding: 25px 0 0 20px;
                    color: #555555;
                    font-weight: 500;
                }

                .t2-box {
                    border: 1px solid #EEEEEE;
                    border-top: none;
                    width: 500px;
                    height: 500px;
                    color: #555555;
                    font-weight: 500;

                    padding: 10px;

                    .c1 {
                        width: 100%;
                        height: 150px;
                        font-size: 15px;
                        border-bottom: 1px solid #EEEEEE;
                        padding: 10px;



                        ul li::before {
                                content: '•';
                                /* 使用黑色實心圓點 */
                                color: black;
                                /* 設置顏色為黑色 */
                                display: inline-block;
                                width: 1em;
                                /* 為圓點和文本設置間距 */
                                margin-left: -1em;
                                /* 對齊列表項 */
                            }

                        ul {
                            list-style-type: none;
                            /* 移除預設標記 */
                            padding-left: 0;                           
                            li {
                                padding: 5px 25px;
                            }
                        }
                    }

                    .c2 {
                        width: 100%;
                        height: 150px;
                        font-size: 15px;
                        border-bottom: 1px solid #EEEEEE;
                        padding: 10px;

                        ul li::before {
                                content: '•';
                                /* 使用黑色實心圓點 */
                                color: black;
                                /* 設置顏色為黑色 */
                                display: inline-block;
                                width: 1em;
                                /* 為圓點和文本設置間距 */
                                margin-left: -1em;
                                /* 對齊列表項 */
                            }

                        ul {
                            list-style-type: none;
                            /* 移除預設標記 */
                            padding-left: 0;                           
                            li {
                                padding: 5px 25px;
                            }
                        }
                    }

                    .c3 {
                        width: 100%;
                        height: 180px;
                        padding: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                }


            }




        }
    }

    .interest-area {
        margin-top: 20px;
        width: 100%;
        height: 800px;
        background: green;

    }

}
</style>
