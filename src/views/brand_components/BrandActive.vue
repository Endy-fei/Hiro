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
          <img src="@/assets/images/14/14-1.png" alt="">
        </div>
        <div class="brand-activities-intro intro-left">
          <p>Mr.Hiro 录音棚x 声音留声机计划</p>
          <span>
            成为成人时我们总是遗憾，儿时的声音已经流逝，那种稚嫩的声音对每个人都有无限的意义，如果我们记录下孩子的声音，当他们都长大时，听到自己儿时的声音会回忆吗，留下儿时的声音，就像木头的纹理，一圈一圈，那是生命的刻痕。
          </span>
        </div>
      </div>
      <div class="brand-activities-info">
        <div class="brand-activities-img">
          <img src="@/assets/images/15/15-1.png" alt="">
        </div>
        <div class="brand-activities-intro">
          <p>星球音乐节</p>
          <span>
            Mr.Hiro连续三年推出，根源星球音乐节，分别在青岛五四广场、潍坊市府广场、中国风筝基地提供艺人、设备、乐器全套服务。
          </span>
        </div>
      </div>
      <div class="brand-activities-info">
        <div class="brand-activities-img">
          <img src="@/assets/images/16/16-1.png" alt="">
        </div>
        <div class="brand-activities-intro intro-left">
          <p>汽车影音展</p>
          <span>
            Mr.Hiro连续三年入驻日本大阪市汽车套件、汽车影音套件JDM展，以匠心，Mr.Hiro CAR RENTAL为主题，通过【速度】【写实】【动听】三个板块带给每一位车主视听感官上前所未有的感悟。
          </span>
        </div>
      </div>
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

  display: inline-block;
  vertical-align: top;
  width: 100%;
  text-align: center;
  margin: 0px;
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

.brand-activities-wrap .brand-activities-content .brand-activities-info .brand-activities-intro {
  display: inline-block;
  width: 480px;
  padding: 38px 0;
  margin-left: 130px;
  vertical-align: top;
}

.brand-activities-wrap .brand-activities-content .brand-activities-info .intro-left {
  float: left;
  margin-left: 0;
  margin-right: 130px;
}

.brand-activities-wrap .brand-activities-content .brand-activities-info .brand-activities-intro p {
  color: #45454d;
  font-size: 36px;
  font-weight: 600;
  padding-bottom: 10px;
  text-align: left;
}

.brand-activities-wrap .brand-activities-content .brand-activities-info .brand-activities-intro span {
  display: block;
  color: #45454d;
  padding-top: 20px;
  font-size: 16px;
  line-height: 40px;
  text-align: left;
}
</style>
