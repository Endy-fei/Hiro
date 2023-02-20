<template>
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
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  tip: {
    type: String,
    default: ''
  },
  intro: {
    type: String,
    default: ''
  },
  img: {
    type: Image,
    default: null
  }
})
</script>

<style scoped>

</style>
