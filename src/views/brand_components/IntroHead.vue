<template>
  <div class="brand-intro-head">
    <!--画两个⚪-->
    <div class="brand-intro-head__circle"></div>
    <div class="brand-intro-head__circle"></div>
    <div class="text-area">
      <p class="title">Mr.Hiro 皓先生</p>
      <div class="circle">
        <p></p>
        <p></p>
      </div>
      <span class="content">亚太中慧旗下规模最大的音乐品牌，致力于为人们提供优质的音乐美学及周边服务</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.brand-intro-head {
  height: 360px;
  background-color: #000000;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-intro-head__circle {
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background-color: #48ce55;
  position: absolute;
  float: left;
}

/*
第一个⚪在左上角
*/
.brand-intro-head__circle:nth-child(1) {
  transform: translate(-50%, -50%);
  top: -300px;
  left: 10px;
}

/*
第二个⚪在右下角
 */
.brand-intro-head__circle:nth-child(2) {
  transform: translate(50%, 50%);
  bottom: -300px;
  right: 10px;
}


.circle {
  padding-top: 4px;
}

.circle p {
  width: 16px;
  height: 16px;
  background-color: #48ce55;
  border-radius: 50%;
  display: inline-block;
}

.circle p:last-child {
  background-color: #fff;
  margin-left: 4px;
}

.text-area {
  width: 1000px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.text-area .title {
  padding-bottom: 4px;
  color: #fff;
  font-size: 40px;
  font-weight: 600;
}

.text-area .content {
  padding-top: 4px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
}
</style>
