<template>
  <div class="new-product-wrap lazy-animate-init lazy-animate-run">
    <div class="line-wrap">
      <div class="line"></div>
      <div class="line-content">
        <p class="title">最新产品</p>
        <p>关注音乐 关注科技</p>
        <div class="circle">
          <p></p>
          <p></p>
        </div>
      </div>
      <div class="line-right"></div>
    </div>
    <div class="swiper-my-pagination"></div>
    <div class="product-carousel-wrap">
      <div style="display: flex">
        <div class="swiper-button-prev"></div>
        <swiper :modules="modules" :slides-per-view="1" :space-between="0" :navigation="navigation"
                :autoplay="autoplay"
                :pagination="pagination" :scrollbar="false" :loop="true" @swiper="onSwiper"
                @slideChange="onSlideChange">

          <swiper-slide class="carousel-img" slide-1>
            <img src="@/assets/images/2/2-123.png" alt="2-123">
          </swiper-slide>
          <swiper-slide class="carousel-img" slide-2>
            <img src="@/assets/images/2/3-123.png" alt="3-123">
          </swiper-slide>
          <swiper-slide class="carousel-img" slide-3>
            <img src="@/assets/images/2/4-123.png" alt="4-123">
          </swiper-slide>
          <swiper-slide class="carousel-img" slide-3>
            <img src="@/assets/images/2/5-123.png" alt="5-123">
          </swiper-slide>
          <swiper-slide class="carousel-img" slide-3>
            <img src="@/assets/images/2/6-123.png" alt="6-123">
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {onMounted} from "vue";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
};

const autoplay = {
  delay: 3000,
  disableOnInteraction: false,
};

const pagination = {
  el: '.swiper-my-pagination',
  bulletElement: 'span',
  clickable: true,
  type: 'custom',
  renderCustom: function (swiper, current, total) {
    let paginationHtml = '';
    const text = ['调音台', '音响', '服务器', '软件支持', '直播服务']
    for (let i = 1; i <= total; i++) {
      if (i === current) {
        // language=HTML format=true
        paginationHtml += `
          <div class='pagination pagination_active'>
            <span class='pagination_text'>${text[i - 1]}</span>
          </div>`
      } else {
        // language=HTML format=true
        paginationHtml += `
          <div class='pagination'>
            <span class='pagination_text'>${text[i - 1]}</span>
          </div>`
      }
    }
    return paginationHtml
  }
};

onMounted(() => {

});


let swiperProduct = undefined;
const onSwiper = (s) => {
  console.log('swiper');
  swiperProduct = s
};

const onSlideChange = (s) => {
  console.log('slide change');
  console.log(s.realIndex);
};

</script>

<style scoped>
.new-product-wrap {
  padding: 90px 0 20px;
}

.line-wrap {
  width: 1152px;
  margin: 0 auto;
  position: relative;
}

.line-wrap .line {
  left: 0;
}

.line-wrap .line-right, .line-wrap .line {
  position: absolute;
  top: 45px;
  width: 384px;
  height: 1px;
  background-color: #ebebeb;
  display: inline-block;
}

.line-wrap .line-right {
  right: 0;
}

.line-wrap .line-content {
  display: inline-block;
  vertical-align: middle;
  padding: 10px 89px 0;
}

.line-wrap .line-content p {
  padding-bottom: 3px;
  color: #919199;
  font-size: 14px;
}

.line-wrap .line-content .title {
  padding-bottom: 4px;
  color: #16161a;
  font-size: 24px;
  font-weight: 600;
}

.line-wrap .line-content .circle {
  padding-top: 4px;
}

.line-wrap .line-content .circle p {
  width: 16px;
  height: 16px;
  background-color: #48ce55;
  border-radius: 50%;
  display: inline-block;
}

.line-wrap .line-content .circle p:last-child {
  background-color: #000;
  margin-left: 4px;
}

.product-carousel-wrap {
  width: 1200px;
  margin: 0 auto;
}

.swiper-wrapper .carousel-img {
  width: 938px;
  font-size: 0;
}

.swiper-wrapper .carousel-img img {
  width: 100%;
}

.product-carousel-wrap .swiper-button-next, .product-carousel-wrap .swiper-button-prev {
  position: unset;
  margin: 0 54px 212px;
  height: auto;
  outline: 0;
  color: #45454d;
}

.swiper-my-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  bottom: 10px;
  left: 0;
  width: 100%;
}

/*.swiper-my-pagination的子元素 */


.swiper-my-pagination > pagination {
  margin: 0 12px !important;
  background: none;
  font-weight: 600;
  color: #000;
}


</style>
