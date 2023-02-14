<template>
  <div class="choice-product-wrap">
    <LineWrap title="精选产品" content="用匠心 打造精品"/>
    <div class="choice-product-content">
      <div class="product-content">
        <div class="img-border">
          <img class="img" src="@/assets/images/4/4-1.png" alt="4-1.png">
        </div>
        <p>阿酷司系统</p>
        <span>舞台音响界的劳斯莱斯</span>
      </div>
      <div class="product-content">
        <div class="img-border">
          <img class="img" src="@/assets/images/4/4-2.png" alt="4-2.png">
        </div>
        <p>K2</p>
        <span>专业低噪</span>
      </div>
      <div class="product-content">
        <div class="img-border">
          <img class="img" src="@/assets/images/4/4-3.png" alt="4-3.png">
        </div>
        <p>Avid VENUE | S6L</p>
        <span>数字混音器</span>
      </div>
      <div class="product-content">
        <div class="img-border">
          <img class="img" src="@/assets/images/4/4-4.png" alt="4-4.png">
        </div>
        <p>barefoot</p>
        <span>监听系统</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import LineWrap from "@/components/LineWrap.vue";
</script>

<style scoped>
.choice-product-wrap {
  background-color: #fafafa;
  padding: 70px 0 103px 0;
}

.choice-product-wrap .choice-product-content {
  padding: 70px 0 60px;
  width: 1152px;
  margin: 0 auto;
}

.choice-product-wrap .choice-product-content .product-content {
  position: relative;
  display: inline-block;
  margin: 0 13px 48px;
  width: 22%;
  background-color: #fff;
  border-bottom: 12px solid transparent;
  cursor: pointer;
}

.choice-product-wrap .choice-product-content .product-content:first-child {
  margin-left: 0;
}

.choice-product-wrap .choice-product-content .product-content .img-border {
  width: 253px;
  height: 384px;
  overflow: hidden;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.choice-product-wrap .choice-product-content .product-content .img-border .img {
  display: block;
  width: 100%;
  height: 100%;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.choice-product-wrap .choice-product-content .product-content p {
  color: #16161a;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 0 0 14px;
  text-align: left;
}

.choice-product-wrap .choice-product-content .product-content span {
  display: block;
  margin-left: 14px;
  text-align: left;
  color: #919199;
  font-size: 12px;
  font-weight: 400;
}

.choice-product-wrap .choice-product-content .product-content:hover {
  outline: 12px solid #fff;
  -webkit-box-shadow: 0 0 40px rgb(0 0 0 / 50%);
  box-shadow: 0 0 40px rgb(0 0 0 / 50%);
}

.choice-product-wrap .choice-product-content .product-content:hover .img {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
</style>
