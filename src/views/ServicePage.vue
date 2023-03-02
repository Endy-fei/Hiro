<template>

  <div class="service">
    <line-wrap :title="serviceContent.title" content=""></line-wrap>
    <div class="pic-content" v-if="serviceContent.title!=='乐器租赁'">

      <img :src="serviceContent.mainPic" alt="">

      <div class="pic-list">
        <img v-for="(pic,index) in serviceContent.pictureList" :src="pic" alt="" @click="changeImages(index)">
      </div>
    </div>

    <div class="big-img" v-else>
      <img :src="serviceContent.mainPic" alt="">
    </div>
  </div>

</template>

<script setup>
//获取路由参数
import {useRoute} from "vue-router";
import LineWrap from "@/components/LineWrap.vue";
import $21_1 from "@/assets/images/21/21-1.png";
import $21_2 from "@/assets/images/21/21-2.png";
import $21_3 from "@/assets/images/21/21-3.png";
import $21_4 from "@/assets/images/21/21-4.png";
import $21_5 from "@/assets/images/21/21-5.png";
import $21_6 from "@/assets/images/21/21-6.png";
import $22_1 from "@/assets/images/22/22-1.png";
import $22_2 from "@/assets/images/22/22-2.png";
import $22_3 from "@/assets/images/22/22-3.png";
import $22_4 from "@/assets/images/22/22-4.png";
import $22_5 from "@/assets/images/22/22-5.png";
import $22_6 from "@/assets/images/22/22-6.png";
import $25_1 from "@/assets/images/25/25-1.png";
import $25_2 from "@/assets/images/25/25-2.png";
import $25_3 from "@/assets/images/25/25-3.png";
import $25_4 from "@/assets/images/25/25-4.png";
import $25_5 from "@/assets/images/25/25-5.png";
import $25_6 from "@/assets/images/25/25-6.png";
import $29_1 from "@/assets/images/29/29-1.png";
import $29_2 from "@/assets/images/29/29-2.png";
import $29_3 from "@/assets/images/29/29-3.png";
import $29_4 from "@/assets/images/29/29-4.png";
import $29_5 from "@/assets/images/29/29-5.png";
import $29_6 from "@/assets/images/29/29-6.png";
import $30_1 from "@/assets/images/30/30-1.png";
import $30_2 from "@/assets/images/30/30-2.png";
import $30_3 from "@/assets/images/30/30-3.png";
import $30_4 from "@/assets/images/30/30-4.png";
import $30_5 from "@/assets/images/30/30-5.png";
import $30_6 from "@/assets/images/30/30-6.png";
import $31_1 from "@/assets/images/31/31-1.png";
import $31_2 from "@/assets/images/31/31-2.png";
import $31_3 from "@/assets/images/31/31-3.png";
import $31_4 from "@/assets/images/31/31-4.png";
import $31_5 from "@/assets/images/31/31-5.png";
import $31_6 from "@/assets/images/31/31-6.png";
import $32_1 from "@/assets/images/32/32-1.png";
import {reactive, ref} from "vue";

const {params} = useRoute();
const {serviceId} = params;

const serviceContentMap = {
  "1": {
    title: "音乐节",
    mainPic: $21_1,
    pictureList: [$21_1, $21_2, $21_3, $21_4, $21_5, $21_6]
  },
  "2": {
    title: "音响·灯光设备租赁",
    mainPic: $22_1,
    pictureList: [$22_1, $22_2, $22_3, $22_4, $22_5, $22_6]
  },
  "5": {
    title: "音响·灯光设备销售",
    mainPic: $25_1,
    pictureList: [$25_1, $25_2, $25_3, $25_4, $25_5, $25_6]
  },
  "10": {
    title: "后期",
    mainPic: $29_1,
    pictureList: [$29_1, $29_2, $29_3, $29_4, $29_5, $29_6]
  },
  "11": {
    title: "录影棚搭建",
    mainPic: $30_1,
    pictureList: [$30_1, $30_2, $30_3, $30_4, $30_5, $30_6]
  },
  "12": {
    title: "直播设备销售",
    mainPic: $31_1,
    pictureList: [$31_1, $31_2, $31_3, $31_4, $31_5, $31_6]
  },
  "13": {
    title: "乐器租赁",
    mainPic: $32_1,
    pictureList: [$32_1]
  }
}

const serviceContent = reactive(serviceContentMap[serviceId]);

const changeImages = (index) => {
  serviceContent.mainPic = serviceContent.pictureList[index];
}

</script>

<style scoped>
.service {
  position: relative;
  min-height: 100vh;
  width: 1152px;
  margin: 0 auto;
  padding-top: 50px;
}

.pic-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 50px;
  padding-top: 50px;
}

.pic-content img {
  width: 1000px;
  height: 600px;
  object-fit: contain;
}

.pic-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
}

.pic-list img {
  width: 150px;
  height: 100px;
  cursor: pointer;
  /*保持纵横比*/
  object-fit: contain;
}

.big-img {
  width: 100%;
  padding-top: 50px;
}

.big-img img {
  width: 1000px;
  height: 600px;
  object-fit: cover;
}

</style>
