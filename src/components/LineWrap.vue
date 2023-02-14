<template>
  <div class="line-wrap">
    <div class="line"></div>
    <div class="line-content">
      <p class="title">{{ title }}</p>
      <p>{{ content }}</p>
      <div class="circle">
        <p></p>
        <p></p>
      </div>
    </div>
    <div class="line-right"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '标题'
  },
  content: {
    type: String,
    default: '内容'
  }
})
</script>

<style scoped>
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
