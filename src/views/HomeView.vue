<template>
  <div class="home lazy-animate-init">
    <div class="carousel-wrap">
      <div class="swiper-container banner-container swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper">
          <div class="swiper-slide carousel-img swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"></div>
          <div class="swiper-slide carousel-img swiper-slide-duplicate-active"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="carousel-preview"></div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.home {
  position: relative;
  min-height: 100vh;
}

.lazy-animate-init {
  -webkit-transition: opacity .5s linear, -webkit-transform .5s ease;
  transition: transform .5s ease, opacity .5s linear;
  visibility: visible;
  opacity: 1;
  -webkit-transform: none;
  transform: none;
}

.carousel-wrap {
  position: relative;
  width: 100%;
}
</style>
