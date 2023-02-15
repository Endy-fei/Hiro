<template>
  <div class="logo_box">
    <div class="logo_img">
      <img src="@/assets/images/9/9-1.jpg" alt="logo">
    </div>
    <p>Mr.Hiro</p>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  width: {
    type: String,
    required: false,
    default: '100%'
  },
  height: {
    type: String,
    required: false,
    default: '100%'
  },
  backgroundColor: {
    type: String,
    required: false,
    //   默认透明
    default: 'transparent'
  },
  color: {
    type: String,
    required: false,
    //   默认黑色
    default: '#000'
  }
})
//根据长宽计算字体大小
const fontSize = computed(() => {
  const width = parseInt(props.width)
  const height = parseInt(props.height)
  const size = Math.min(width, height)
  return size * 0.7 + 'px'
})
//根据背景色计算字体颜色为对比色
const color = computed(() => {
  const color = props.backgroundColor
  if (color === 'transparent') {
    return '#000'
  }
  //判断字符串是否为16进制颜色
  if (!/^#([0-9a-fA-F]{4}|[0-9a-fA-F]{7})$/.test(color)) {
    //根据背景色计算字体颜色为对比色
    const r = parseInt(color.slice(1, 3), 16)
    const g = parseInt(color.slice(3, 5), 16)
    const b = parseInt(color.slice(5, 7), 16)
    const contrast = (r * 299 + g * 587 + b * 114) / 1000
    return contrast >= 128 ? '#000' : '#fff'
  }
  //默认黑色
  return 'black'
})
</script>

<style scoped>
.logo_box {
  height: v-bind(height);
  width: v-bind(width);
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.logo_box .logo_img {
  display: flex;
  height: 100%;
  width: 100%;
  flex: 0;
  justify-content: center;
  align-items: center;
}

.logo_box img {
  height: 100%;
  object-fit: contain;
}

.logo_box p {
  flex: 0;
  font-size: v-bind(fontSize);
  font-weight: 500;
  margin: 0;
  padding: 0;
}


</style>
