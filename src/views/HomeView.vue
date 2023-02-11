<template>
  <div class="home lazy-animate-init">
    <MainSwiper/>
  </div>
</template>
<script setup>
import MainSwiper from '@/views/home_components/MainSwiper.vue'
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


</style>
