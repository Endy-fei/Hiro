<template>
  <div class="standard-service-wrap">
    <LineWrap :title="title" content="极致服务 最好的你"></LineWrap>
    <div class="tab-wrap">
      <ul>
        <li :class="{active:isStandard}" @click="changeTab(0)">
          <p>Mr.Hiro标准服务</p>
        </li>
        <li :class="{active:!isStandard}" @click="changeTab(1)">
          <p>Mr.Hiro大师标准服务</p>
        </li>
      </ul>
      <div class="tab-content">
        <section v-if="isStandard" class="tab-section active">
          <div class="server-content">
            <img src="@/assets/images/3/3-1/3-1-1.png" alt="">
            <p class="server-name">招商</p>
            <p class="font-style">Investment</p>
            <span>带领专业团队进行招商，给你全程微笑的服务，对每一次招商机会都用尽全力</span>
          </div>
          <div class="server-content">
            <img src="@/assets/images/3/3-1/3-1-2.png" alt="">
            <p class="server-name">策划</p>
            <p class="font-style">Mastermind</p>
            <span>使用一线策划人员，塑造最完美的策划方案</span>
          </div>
          <div class="server-content">
            <img src="@/assets/images/3/3-1/3-1-3.png" alt="">
            <p class="server-name">协作</p>
            <p class="font-style">Collaboration</p>
            <span>团队定期对现有方案打造Mr.Hiro专用三阶段体系，答客户进行举例一次三次方案的推进</span>
          </div>
          <div class="server-content">
            <img src="@/assets/images/3/3-1/3-1-4.png" alt="">
            <p class="server-name">产出</p>
            <p class="font-style">Output</p>
            <span>我们进行舞台3D打印，场所立体建模，对模糊的概念，实体化，电子化，让客户更加清楚明了</span>
          </div>
          <div class="server-content">
            <img src="@/assets/images/3/3-1/3-1-5.png" alt="">
            <p class="server-name">实施</p>
            <p class="font-style">Implement</p>
            <span>Mr.Hiro集成所有技术人员的结晶，对每一次施工进行全方位抽验，做到“0”危险，“0”故障</span>
          </div>
        </section>
        <section v-else class="tab-section active professional">
          <div class="server-content">
            <img src="@/assets/images/3/3-2/3-2-1.png" alt="">
            <p class="server-name">主题</p>
            <p class="font-style">Theme</p>
            <span>我们励治于对每一场活动定一个主题，从主题发散，开始创造</span>
          </div>
          <div class="server-content">
            <img src="@/assets/images/3/3-2/3-2-2.png" alt="">
            <p class="server-name">人员</p>
            <p class="font-style">Personnel</p>
            <span>使用一线人员，并对所有技术人员进行培训，确保每一次活动的顺利进行</span>
          </div>
          <div class="server-content">
            <img src="@/assets/images/3/3-2/3-2-3.png" alt="">
            <p class="server-name">空间</p>
            <p class="font-style">Space</p>
            <span>艺术空间是Mr.Hiro对音乐的专业定制，每一次的艺术活动一定有他的空间</span>
          </div>
          <div class="server-content">
            <img src="@/assets/images/3/3-2/3-2-4.png" alt="">
            <p class="server-name">前期</p>
            <p class="font-style">Prophase</p>
            <span>每个专业的音乐团队人员都会在前期对音乐或设备进行量身打造</span>
          </div>
          <div class="server-content">
            <img src="@/assets/images/3/3-2/3-2-5.png" alt="">
            <p class="server-name">后期</p>
            <p class="font-style">Anaphase</p>
            <span>Mr.Hiro有着高端的录音记录系统，将会对每一个细节进行记录，并制作</span>
          </div>
        </section>
      </div>
    </div>
  </div>

</template>

<script setup>
import LineWrap from "@/components/LineWrap.vue";
import {computed, ref} from "vue";

const isStandard = ref(true);


const title = computed(() => {
  return isStandard.value ? 'Mr.Hiro标准服务' : 'Mr.Hiro大师标准服务';
})

const changeTab = (index) => {
  isStandard.value = index === 0;
}


</script>

<style scoped>

.standard-service-wrap {
  background-color: #fff;
  padding: 80px 0 88px;
}

.tab-wrap {
  margin-top: 34px;
}

.tab-wrap ul li {
  display: inline-block;
  padding: 16px 90px;
  border: 1px solid #d4d4d9;
  border-radius: 2px 0 0 2px;
  font-size: 14px;
  color: #45454d;
  cursor: pointer;
}

.tab-wrap ul li:hover {
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  -webkit-transition: all 1s;
  transition: all 1s;
}

.tab-wrap ul li.active {
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
}

.tab-wrap ul li:last-child {
  border-radius: 0 2px 2px 0;
}

.tab-wrap ul li:hover:last-child {
  border: 1px solid #c5a563;
  background-color: #c5a563;
  color: #fff;
  -webkit-transition: all 1s;
  transition: all 1s;
}

.tab-wrap ul li.active:last-child {
  border: 1px solid #c5a563;
  background-color: #c5a563;
  color: #fff;
}

.tab-wrap .tab-content {
  width: 1152px;
  margin: 60px auto 0;
}

.tab-wrap .tab-content .tab-section.active {
  display: block;
  -webkit-transition: all 2s;
  transition: all 2s;
}

.tab-wrap .tab-content .tab-section .server-content {
  display: inline-block;
  width: 20%;
  height: 384px;
  padding: 0 12px;
  vertical-align: top;
}

.tab-wrap .tab-content .tab-section img {
  width: 100%;
}

.tab-wrap .tab-content .tab-section .server-content img {
  width: 211px;
}

.tab-wrap .tab-content .tab-section .server-content p {
  padding-bottom: 14px;
  font-size: 14px;
  color: #d4d4d9;
}

.tab-wrap .tab-content .tab-section .server-content .server-name {
  font-size: 24px;
  font-weight: 600;
  color: #16161a;
  padding: 20px 0 2px;
}

.tab-wrap .tab-content .tab-section .server-content .font-style {
  font-style: oblique;
}

.tab-wrap .tab-content .tab-section .server-content span {
  width: 187px;
  color: #45454d;
  font-size: 13px;
}

.tab-wrap .tab-content .tab-section.professional .server-name {
  color: #c5a563;
}

.tab-wrap .tab-content .tab-section.professional p {
  color: #f0e2c7;
  font-weight: 400;
}
</style>
