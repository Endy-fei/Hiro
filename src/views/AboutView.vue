<template>

  <div class="about">
    <div class="about-content">
      <line-wrap title="关于 Mr.Hiro" content=""></line-wrap>
      <div class="content">
        <img src="@/assets/images/33/33.png" alt="">
        <p>Mr.Hiro × 亚太中慧</p>
      </div>
      <div class="content">
        <img src="@/assets/images/34/34.png" alt="">
        <p>Mr.Hiro × 中敏慧根</p>
      </div>
    </div>
    <div class="company">
      <line-wrap title="公司资质" content=""></line-wrap>
      <div class="company-cards">
        <img src="@/assets/images/35/35-1.png" alt="">
        <img src="@/assets/images/35/35-2.png" alt="">
        <img src="@/assets/images/35/35-3.png" alt="">
        <img src="@/assets/images/35/35-4.png" alt="">
        <img src="@/assets/images/35/35-5.png" alt="">
        <img src="@/assets/images/35/35-6.png" alt="">
        <img src="@/assets/images/35/35-7.png" alt="">
        <img src="@/assets/images/35/35-8.png" alt="">
        <img src="@/assets/images/35/35-9.png" alt="">
        <img src="@/assets/images/35/35-10.png" alt="">
        <img src="@/assets/images/35/35-11.png" alt="">
        <img src="@/assets/images/35/35-12.png" alt="">
        <img src="@/assets/images/35/35-13.png" alt="">
        <img src="@/assets/images/35/35-14.png" alt="">
      </div>
    </div>

  </div>

</template>
<script setup>
import LineWrap from "@/components/LineWrap.vue";
</script>
<style>
.about {
  margin: 0 auto;
  width: 1152px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.about-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.about-content .content img {
  /*width: 100%;*/
  height: 500px;
  /*保持纵横比*/
  object-fit: contain;
  margin-bottom: 30px;
}

.about-content .content p {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.company {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.company .company-cards {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.company .company-cards img {
  width: 200px;
  /*height: 100%;*/
  /*保持纵横比*/
  object-fit: contain;
}

</style>
