<template>
  <div class="carousel-wrap">
    <swiper :modules="modules" :slides-per-view="1" :space-between="0" :navigation="false"
            :autoplay="{delay: 3000,disableOnInteraction: false}" :pagination="false"
            :scrollbar="false"
            :loop="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
      <swiper-slide class="carousel-img" slide-1></swiper-slide>
      <swiper-slide class="carousel-img" slide-2></swiper-slide>
      <swiper-slide class="carousel-img" slide-3></swiper-slide>
    </swiper>
    <div class="carousel-preview">
      <div class="carousel-window">
        <div class="preview-img">
          <img :src="previewImg" alt="img">
        </div>
      </div>
      <div class="carousel-btn">
        <p class="swiper-left" @mouseover="showBeforePreviewImg" @mouseleave="hidePreviewImg"
           @click="swiperU.slidePrev()">
          <img src="@/assets/images/utils/arrow-right.png">
        </p>
        <p class="swiper-right" @mouseover="showAfterPreviewImg" @mouseleave="hidePreviewImg"
           @click="swiperU.slideNext()">
          <img src="@/assets/images/utils/arrow-right.png">
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {onMounted, ref} from "vue";
import p1 from '@/assets/images/1/1-1.png';
import p2 from '@/assets/images/1/1-2.png';
import p3 from '@/assets/images/1/1-3.png';
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const picList = [p1, p2, p3]

const previewImg = ref(picList[2])

const previewOpacity = ref(0)


let isAfter = true;

let swiperRealIndex = 0;

let swiperU = undefined;


const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const onSwiper = (swiper) => {
  console.log('swiper');
  swiperU = swiper
};
const onSlideChange = (swiper) => {
  swiperRealIndex = swiper.realIndex;
  if (isAfter) {
    if (swiper.realIndex === 2) {
      previewImg.value = picList[0]
    } else {
      previewImg.value = picList[swiper.realIndex + 1]
    }
  } else {
    if (swiper.realIndex === 0) {
      previewImg.value = picList[2]
    } else {
      previewImg.value = picList[swiper.realIndex - 1]
    }
  }
};

const showBeforePreviewImg = () => {
  if (swiperRealIndex === 0) {
    previewImg.value = picList[2]
  } else {
    previewImg.value = picList[swiperRealIndex - 1]
  }
  previewOpacity.value = 1;
  isAfter = false;
}

const showAfterPreviewImg = () => {

  if (swiperRealIndex === 2) {
    previewImg.value = picList[0]
  } else {
    previewImg.value = picList[swiperRealIndex + 1]
  }
  previewOpacity.value = 1;
  isAfter = true;
}

const hidePreviewImg = () => {
  previewOpacity.value = 0
}


</script>

<style scoped>
.carousel-wrap {
  position: relative;
  width: 100%;
}

.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}

.swiper-wrapper .carousel-img {
  width: 100%;
  height: 600px;
  font-size: 0;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}

.swiper-wrapper .carousel-img[slide-1] {
  background-image: url("@/assets/images/1/1-1.png");
}

.swiper-wrapper .carousel-img[slide-2] {
  background-image: url("@/assets/images/1/1-2.png");
}

.swiper-wrapper .carousel-img[slide-3] {
  background-image: url("@/assets/images/1/1-3.png");
}

.carousel-wrap .carousel-preview {
  position: absolute;
  z-index: 100;
  bottom: 0;
  right: 20%;
}

.carousel-wrap .carousel-preview .carousel-window {
  position: relative;
  opacity: v-bind(previewOpacity);
  display: inline-block;
  width: 156px;
  height: 68px;
  vertical-align: middle;
  border-right: 1px solid #e3e3e6;
  -webkit-transition: opacity .2s ease;
  transition: opacity .2s ease;
}

.carousel-wrap .carousel-preview .carousel-window .preview-img {
  position: relative;
  width: 156px;
  height: 68px;
  overflow: hidden;
}

.carousel-wrap .carousel-preview .carousel-window .preview-img img {
  position: absolute;
  left: 50%;
  margin-left: -136px;
  height: 68px;
}

.carousel-wrap .carousel-preview .carousel-btn {
  background-color: #fff;
  display: inline-block;
  height: 68px;
  line-height: 68px;
  vertical-align: middle;
}

.carousel-wrap .carousel-preview .carousel-btn p {
  display: inline-block;
  outline: 0;
}

.carousel-wrap .carousel-preview .carousel-btn p:first-child:after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 24px;
  margin-left: 20px;
  background-color: #e3e3e6;
  vertical-align: middle;
}

.carousel-wrap .carousel-preview .carousel-btn .swiper-left {
  cursor: pointer;
  padding-left: 30px;
}

.carousel-wrap .carousel-preview .carousel-btn .swiper-left img {
  display: inline-block;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  padding-top: 1px;
  vertical-align: middle;
}

.carousel-wrap .carousel-preview .carousel-btn .swiper-right {
  cursor: pointer;
  padding: 0 30px 0 20px;
}

.carousel-wrap .carousel-preview .carousel-btn .swiper-right img {
  display: inline-block;
  vertical-align: middle;
}
</style>
