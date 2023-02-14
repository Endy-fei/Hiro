<template>
  <div class="brand-intro-wrap">
    <IntroHead/>
    <div class="anchor">
      <div class="anchor-wrap">
        <div class="add-margin">
          <div class="anchor-content">
            <div class="nav-list" v-for="(nav,index) in navList" :key="index" :class="{active:activeIndex===index}"
                 @click="changeIndex(index)">
              <img :src="activeIndex===index?nav.imgActive:nav.img" alt="">
              <p>{{ nav.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="brand-line-wrap">
      <div class="brand-content">
        <div class="content-set">
          <div class="img-content">
            <p class="title">品牌理念</p>
            <p class="tip">音乐需要坚持</p>
            <div class="circle">
              <p></p>
              <p></p>
            </div>
            <p class="intro">
              Mr.Hiro “皓先生”是音乐节中最重要的频率，它随着振动产生音乐，让人们能够清楚听见。我们将品牌命名为“Mr.Hiro”，就是为了遵循皓先生“要有优质的介质来服务音乐”的宗旨
            </p>
          </div>
          <div class="img bg-img">
            <img src="@/assets/images/11/11-1.png" alt="">
          </div>
        </div>
      </div>
      <div class="brand-content gray-bg">
        <div class="content-set">
          <div class="img-content content-right">
            <p class="title">品牌特色</p>
            <p class="tip">高·快·轻</p>
            <div class="circle">
              <p></p>
              <p></p>
            </div>
            <p class="intro">
              Mr.Hiro 打破传统音乐行业服务，开创stage3模式，追求高、快、轻，为顾客提供定制服务，快速通过审核，轻松举办各类大型活动
            </p>
          </div>
          <div class="img bg-img">
            <img src="@/assets/images/12/12-1.png" alt="">
          </div>
        </div>
      </div>
      <div class="brand-content">
        <div class="content-set">
          <div class="img-content">
            <p class="title">企业文化</p>
            <p class="tip">为音乐为热爱</p>
            <div class="circle">
              <p></p>
              <p></p>
            </div>
            <p class="intro">
              使命：为音乐为热爱
              <br>
              愿景：2030年成为扶持音乐人最多的企业，中国前十的舞美服务型公司，前50艺人打造公司，服务一亿音乐爱好人员
              <br>
              价值观：热爱、诚信、正能量
            </p>
          </div>
          <div class="img bg-img">
            <img src="@/assets/images/13/13-1.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="brand-activities-wrap">
      <div class="brand-activities-content">
        <div class="brand-activities-title">
          <div class="brand-line-wrap">
            <div class="brand-content">
              
            </div>
          </div>
        </div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
      </div>

    </div>
    <div></div>
  </div>
</template>

<script setup>
import IntroHead from "@/views/brand_components/IntroHead.vue";
import {p1, p2, p3, p4, p5, p1Active, p2Active, p3Active, p4Active, p5Active} from "@/assets/images/utils/anchor";
import {ref} from "vue";

const activeIndex = ref(0);

const navList = [
  {
    img: p1,
    imgActive: p1Active,
    text: "品牌理念"
  },
  {
    img: p2,
    imgActive: p2Active,
    text: "品牌特色"
  },
  {
    img: p3,
    imgActive: p3Active,
    text: "企业文化"
  },
  {
    img: p4,
    imgActive: p4Active,
    text: "品牌活动"
  },
  {
    img: p5,
    imgActive: p5Active,
    text: "发展历程"
  }
]

const changeIndex = (index) => {
  activeIndex.value = index;
}


</script>

<style scoped>
.brand-intro-wrap {
  background-color: #fff;
}

.anchor {
  min-height: 88px;
}

.anchor .anchor-wrap {
  background-color: #fff;
  -webkit-box-shadow: 0 2px 8px 0 rgb(0 0 0 / 6%);
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 6%);
}

.anchor .anchor-wrap .add-margin {
  width: 1152px;
  background-color: #fff;
  margin: 0 auto;
}

.anchor .anchor-wrap .add-margin .anchor-content {
  height: 88px;
  line-height: 88px;
}

.anchor .anchor-wrap .add-margin .anchor-content .nav-list {
  display: inline-block;
  width: 20%;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}


.anchor .anchor-wrap .add-margin .anchor-content .active {
  color: #000;
  font-weight: 600;
  -webkit-transition: opacity .2s ease;
  transition: opacity .2s ease;
}

.anchor .anchor-wrap .add-margin .anchor-content .nav-list img, .anchor .anchor-wrap .add-margin .anchor-content .nav-list p {
  display: inline-block;
}


.anchor .anchor-wrap .add-margin .anchor-content .nav-list img {
  width: 26px;
  vertical-align: middle;
  margin-right: 10px;
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

.brand-line-wrap .brand-content .content-set .img {
  position: relative;
  display: inline-block;
  width: 538px;
  height: 419px;
  background-color: #f2f2f5;
}

.brand-line-wrap .brand-content .content-set .bg-img {
  background-color: transparent;
  width: 484px;
  height: 484px;
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

.brand-line-wrap .brand-content .content-set .img img {
  position: absolute;
  width: 100%;
  bottom: 15px;
  right: 15px;
}

.brand-line-wrap .brand-content .content-set .bg-img img {
  width: 484px;
}

.brand-line-wrap .gray-bg {
  background-color: #fafafa;
}

.brand-line-wrap .brand-content .content-set .content-right {
  float: right;
  margin-right: 0;
  margin-left: 113px;
}

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
</style>
