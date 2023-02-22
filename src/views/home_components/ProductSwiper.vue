<template>
  <div class="new-product-wrap lazy-animate-init lazy-animate-run">
    <LineWrap title="最新产品" content="关注音乐 关注科技"/>
    <div class="swiper-my-pagination"></div>
    <div class="product-carousel-wrap">
      <div style="display: flex">
        <div class="swiper-button-prev"></div>
        <swiper :modules="modules" :slides-per-view="1" :space-between="0" :navigation="navigation"
                :autoplay="autoplay" :speed="1000"
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
import LineWrap from "@/components/LineWrap.vue";

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
    const style = 'width: auto;\n' +
        '    height: auto;\n' +
        '    border-radius: 0;\n' +
        '    background: transparent;\n' +
        '    color: #45454d;\n' +
        '    font-size: 16px;\n' +
        '    opacity: 1;\n' +
        '    margin: 0 12px;\n' +
        '    cursor: pointer;\n';
    const activeStyle = 'background: none;\n' +
        '    font-weight: 600;\n' +
        '    color: #000;\n' +
        '    width: auto;\n' +
        '    height: auto;\n' +
        '    border-radius: 0;\n' +
        '    font-size: 16px;\n' +
        '    opacity: 1;\n' +
        '    margin: 0 12px;\n' +
        '    cursor: pointer;';

    let paginationHtml = '';
    const text = ['调音台', '音响', '服务器', '软件支持', '直播服务']
    for (let i = 1; i <= total; i++) {
      if (i === current) {
        // language=HTML format=true
        paginationHtml += `<span
            style="${activeStyle}">${text[i - 1]}</span>`
      } else {
        // language=HTML format=true
        paginationHtml += `<span
            style="${style}">${text[i - 1]}</span>`
      }
      //  加一个分割线
      if (i !== total) {
        paginationHtml += `<span style="width: 1px;height: 12px;background-color: #939393;display: inline-block;margin: 0 12px;"></span>`
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
  margin: 0 54px;
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




</style>
