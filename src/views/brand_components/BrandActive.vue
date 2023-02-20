<template>
  <div class="brand-activities-wrap">
    <div class="brand-activities-content">
      <div class="brand-activities-title">
        <div class="brand-line-wrap">
          <div class="brand-content">
            <div class="content-set">
              <div class="img-content">
                <p class="title">品牌活动</p>
                <p class="tip"></p>
                <div class="circle">
                  <p></p>
                  <p></p>
                </div>
                <p class="intro"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-activities-info">
        <div class="brand-activities-img">
          <img src="img/verawang.81669464.jpg" alt="">
        </div>
      </div>
      <div class=""></div>
      <div class=""></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.brand-activities-wrap {
  background-color: #fafafa;
  padding-bottom: 120px;
  text-align: center;
}

.brand-activities-wrap .brand-activities-content {
  width: 1152px;
  padding-top: 100px;
  margin: 0 auto;
}

.brand-line-wrap {
  height: auto;
}

.brand-line-wrap .brand-content {
  padding: 120px 0;
}

.brand-line-wrap .brand-content .content-set {
  width: 1152px;
  margin: 0 auto;
}

.brand-line-wrap .brand-content .content-set .img-content {
  width: 463px;
  margin-right: 113px;
  display: inline-block;
  text-align: left;
  vertical-align: top;
}

.brand-line-wrap .brand-content .content-set .img-content .title {
  font-size: 42px;
  font-weight: 600;
  color: #16161a;
}

.brand-line-wrap .brand-content .content-set .img-content .tip {
  font-size: 16px;
  color: #16161a;
}

.brand-line-wrap .brand-content .content-set .img-content .circle {
  padding: 14px 0 48px 0;
}

.brand-line-wrap .brand-content .content-set .img-content .circle p {
  width: 16px;
  height: 16px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
}

.brand-line-wrap .brand-content .content-set .img-content .circle p:last-child {
  background-color: #48ce55;
  margin-left: 4px;
}

.brand-line-wrap .brand-content .content-set .img-content .intro {
  width: 100%;
  background-image: -webkit-gradient(linear, left top, right top, from(#d4d4d9), color-stop(50%, #d4d4d9), color-stop(50%, transparent));
  background-image: linear-gradient(90deg, #d4d4d9 0, #d4d4d9 50%, transparent 0);
  background-size: 10px 1px;
  background-repeat: repeat-x;
  padding-top: 15px;
  font-size: 16px;
  color: #45454d;
  line-height: 40px;
}

.brand-activities-wrap .brand-activities-content .brand-activities-info {
  padding-top: 120px;
}

.brand-activities-wrap .brand-activities-content .brand-activities-info .brand-activities-img {
  position: relative;
  display: inline-block;
  width: 538px;
  height: 360px;
  background-color: #f2f2f5;
}

.brand-activities-wrap .brand-activities-content .brand-activities-info .brand-activities-img img {
  position: absolute;
  right: 14px;
  bottom: 14px;
  width: 100%;
}
</style>
