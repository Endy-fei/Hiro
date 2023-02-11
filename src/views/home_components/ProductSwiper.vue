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
    <div class="product-carousel-wrap"></div>
  </div>

</template>

<script setup>
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

</style>
