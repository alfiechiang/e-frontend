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

            <span class="category_font">分類</span>
            <div class="select-option" @click="openSelectBox">
                <span>全部</span>
                <div class="select-option-box"  :style="{ display: showselectBox ? 'block' : 'none' }">
                    <ul>
                        <li>
                            <div>全部</div>
                        </li>
                        <li>
                            <div>銀/銅質收藏品(11)</div>
                        </li>
                        <li>
                            <div>機製銀幣(8)</div>
                        </li>
                        <li>
                            <div>古錢(378)</div>
                        </li>
                        <li>
                            <div>銅幣(9)</div>
                        </li>
                        <li>
                            <div>花錢(16)</div>
                        </li>
                        <li>
                            <div>高古類(16)</div>
                        </li>
                        <li>
                            <div>送評服務(1)</div>
                        </li>
                        <li>
                            <div>泉譜(1)</div>
                        </li>
                        <li>
                            <div>紀念幣(1)</div>
                        </li>
                        <li>
                            <div>印章類(1)</div>
                        </li>
                    </ul>
                
                </div>
            </div>
        </div>
        <div class="content">
            <div class="item">
                <div class="img-area">
                    <img src="../../assets/月孕星手.jpeg" alt="">
                </div>
                <div class="desc">
                    <div class="firstlayer">
                        <span>萬歷通寶</span>&nbsp;
                        <span>星孕星手</span>
                    </div>
                    <div class="secondlayer">
                        <span>TWD</span>&nbsp;
                        <span>28.000</span>
                    </div>

                </div>
            </div>
            <div class="item">
                <div class="img-area">
                    <img src="../../assets/coin2.png" alt="">

                </div>
                <div class="desc">
                    <div class="firstlayer">
                        <span>萬歷通寶</span>&nbsp;
                        <span>大正三元</span>
                    </div>
                    <div class="secondlayer">
                        <span>TWD</span>&nbsp;
                        <span>28.000</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="img-area">
                    <img src="../../assets/coin2.png" alt="">

                </div>
                <div class="desc">
                    <div class="firstlayer">
                        <span>萬歷通寶</span>&nbsp;
                        <span>大正三元</span>
                    </div>
                    <div class="secondlayer">
                        <span>TWD</span>&nbsp;
                        <span>28.000</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="img-area">
                    <img src="../../assets/coin2.png" alt="">

                </div>
                <div class="desc">
                    <div class="firstlayer">
                        <span>萬歷通寶</span>&nbsp;
                        <span>大正三元</span>
                    </div>
                    <div class="secondlayer">
                        <span>TWD</span>&nbsp;
                        <span>28.000</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="img-area">
                    <img src="../../assets/coin2.png" alt="">

                </div>
                <div class="desc">
                    <div class="firstlayer">
                        <span>萬歷通寶</span>&nbsp;
                        <span>大正三元</span>
                    </div>
                    <div class="secondlayer">
                        <span>TWD</span>&nbsp;
                        <span>28.000</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="img-area">
                    <img src="../../assets/coin2.png" alt="">

                </div>
                <div class="desc">
                    <div class="firstlayer">
                        <span>萬歷通寶</span>&nbsp;
                        <span>大正三元</span>
                    </div>
                    <div class="secondlayer">
                        <span>TWD</span>&nbsp;
                        <span>28.000</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="img-area">
                    <img src="../../assets/coin2.png" alt="">

                </div>
                <div class="desc">
                    <div class="firstlayer">
                        <span>萬歷通寶</span>&nbsp;
                        <span>大正三元</span>
                    </div>
                    <div class="secondlayer">
                        <span>TWD</span>&nbsp;
                        <span>28.000</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="img-area">
                    <img src="../../assets/coin2.png" alt="">

                </div>
                <div class="desc">
                    <div class="firstlayer">
                        <span>萬歷通寶</span>&nbsp;
                        <span>大正三元</span>
                    </div>
                    <div class="secondlayer">
                        <span>TWD</span>&nbsp;
                        <span>28.000</span>
                    </div>
                </div>
            </div>




        </div>
    </div>
</template>
    
<script setup lang="ts">
import {  ref } from 'vue';

import bannerSrc from '@/assets/banner.jpg';
import igIcon from '@/assets/ig-icon.png';
import fbIcon from '@/assets/fb-icon.png';
import starIcon from '@/assets/star-icon.png';

let showselectBox = ref(false);

const openSelectBox = () => {
    showselectBox.value=!showselectBox.value;
};

</script>
  
<style lang="scss" scoped>
#hall {
    .banner {
        width: 100%;
        height: 600px;
        margin-top: 10px;

        img {
            max-width: 100%;
        }
    }

    .second-layer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        span {
            font-weight: 500;
        }

        .icon-area {
            margin-top: 20px;
            display: flex;

            .ig-icon-area {
                height: 20px;
                width: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-right: 20px;
                color: #A23AA8;

                span {
                    font-size: 12px;
                    font-weight: 200;
                }

                img {
                    max-height: 15px;
                }

            }

            .fb-icon-area {
                height: 20px;
                width: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-right: 20px;

                color: #3A5999;

                span {
                    font-size: 12px;
                    font-weight: 200;
                }

                img {
                    max-height: 15px;
                }

            }

            .star-icon-area {

                height: 20px;
                width: 140px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 20px;

                img {
                    max-height: 10px;
                }

                span {
                    font-size: 13px;
                    font-weight: 500;
                }

            }


        }
    }

    .select-area {
        width: 150px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .category_font {
            font-size: 12px;
            color: #737373;
        }

        .select-option {
            border-bottom: 1px solid black;
            position: relative;
        }


        .select-option-box {
            padding-top: 30px;
            position: absolute;
            display: block;
            width: 260px;
            height: 600px;
            top: 30px;
            right: -95px;
            background: #FFF;
            box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);

            li{
                padding: 10px 25px;
                font-weight: 400;

            }

            li:hover{
                cursor: pointer;
                background-color: #F0F0F0;
            }
        }


        .select-option::after {
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            background-image: url('../../assets/arrow-down.png');
            background-size: cover;
            margin-left: 100px;
            /* 调整左边距 */

        }

    }


    .content {
        margin-top: 50px;
        width: 100%;
        height: 100%;
        display: grid;
        gap: 20px;

        grid-template-columns: auto auto auto auto;

        .item:hover {
            opacity: 0.8;
            cursor: pointer;
        }

        .item {
            width: 200px;
            height: 300px;
            overflow: hidden;

            .img-area {
                width: 100%;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    max-height: 200px;
                }
            }

            .desc {
                width: 100%;
                height: 100%;

                .firstlayer {
                    width: 100%;
                    height: 30px;
                    display: flex;
                    align-items: center;

                    span {
                        font-weight: 500;
                    }
                }

                .secondlayer {
                    width: 100%;
                    height: 30px;
                    display: flex;
                    align-items: center;

                    span {
                        color: #555555;
                    }
                }
            }
        }
    }





}</style>
    