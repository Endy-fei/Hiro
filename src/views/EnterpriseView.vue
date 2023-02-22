<template>
  <div class="business-cooperation-wrap">
    <div class="business-cooperation-content">
      <div class="business-cooperation-head"></div>
      <div class="business-cooperation-container">
        <div class="product">
          <line-wrap title="产品服务" content="记录最动听的音乐"></line-wrap>
          <img src="@/assets/images/20/20-1.png" alt="">
          <div class="business-product-intro">
            <div class="product-content">
              <div class="product-title">
                <p class="product-num">01</p>
                <div class="product-name">
                  <p>音乐节</p>
                  <p class="english-name">Mr.Hiro·演唱会定制服务</p>
                </div>
              </div>
              <div class="product-desc">
                <p>
                  一场大型演出，是团队凝聚力的体现，是态度的诠释
                </p>
                <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }"
                             :to="{name:'service',params:{serviceId:1}}">
                  <a v-bind="$attrs" :href="href" @click="navigate" target="_blank">
                    查看详情&gt;&gt;
                  </a>
                </router-link>
              </div>
            </div>
            <div class="product-content">
              <div class="product-title">
                <p class="product-num">02</p>
                <div class="product-name">
                  <p>音响灯光</p>
                  <p class="english-name">设备租赁</p>
                </div>
              </div>
              <div class="product-desc">
                <p>对音乐的一丝不苟，对设备的认真用心，是个行业一出生的宗旨</p>
                <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }"
                             :to="{name:'service',params:{serviceId:2}}">
                  <a v-bind="$attrs" :href="href" @click="navigate" target="_blank">
                    查看详情&gt;&gt;
                  </a>
                </router-link>
              </div>
            </div>
            <div class="product-content">
              <div class="product-title">
                <p class="product-num">03</p>
                <div class="product-name">
                  <p>艺人打造</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc">
                <p>艺人是一种职业，要用对工作的用心去挑战有实力的未来</p>
                <a href="javascript:void(0);">敬请期待&gt;&gt;</a>
              </div>
            </div>
            <div class="product-content">
              <div class="product-title">
                <p class="product-num">04</p>
                <div class="product-name">
                  <p>演出经纪</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc">
                <p>
                  “跨界合作，品牌共赢”针对艺人提高自身市场影响力，创造价值
                </p>
                <a href="javascript:void(0);">敬请期待&gt;&gt;</a>
              </div>
            </div>
            <div class="product-content">
              <div class="product-title">
                <p class="product-num">05</p>
                <div class="product-name">
                  <p>音响·灯光销售</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc show-border">
                <p>
                  Mr.Hiro携手世界顶尖音响，灯光打造专业音乐灯光环境
                </p>
                <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }"
                             :to="{name:'service',params:{serviceId:5}}">
                  <a v-bind="$attrs" :href="href" @click="navigate" target="_blank">
                    查看详情&gt;&gt;
                  </a>
                </router-link>
              </div>
            </div>
            <div class="product-content">
              <div class="product-title">
                <p class="product-num">06</p>
                <div class="product-name">
                  <p>个人音乐定制服务</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc show-border">
                <p>
                  Mr.Hiro针对个人品牌，根据不同人群种类定制服务
                </p>
                <a href="javascript:void(0);">敬请期待&gt;&gt;</a>
              </div>
            </div>
            <div class="product-content">
              <div class="product-title">
                <p class="product-num">07</p>
                <div class="product-name">
                  <p>企业音乐定制服务</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc show-border">
                <p>
                  Mr.Hiro针对高端品牌，企业影响力，创造其价值，定制合适的服务
                </p>
                <a href="javascript:void(0);">敬请期待&gt;&gt;</a>
              </div>
            </div>
            <div class="product-content">
              <div class="product-title">
                <p class="product-num">08</p>
                <div class="product-name">
                  <p>视频服务</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc show-border">
                <p>
                  视频有着非常强的传播性，Mr.Hiro提供全方面的视频服务
                </p>
                <a href="javascript:void(0);">敬请期待&gt;&gt;</a>
              </div>
            </div>
            <div class="product-content">
              <div class="product-title">
                <p class="product-num">09</p>
                <div class="product-name">
                  <p>直播服务</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc show-border">
                <p>
                  声音与动态画面的结合，极富表现力Mr.Hiro将为每一个客户提供更好的形象展示，高端的直播环境
                </p>
                <a href="javascript:void(0);">敬请期待&gt;&gt;</a>
              </div>
            </div>
            <div class="product-content">
              <div class="product-title">
                <p class="product-num">10</p>
                <div class="product-name">
                  <p>音乐合作制作</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc show-border">
                <p>
                  有着国内高品质录音棚的Mr.Hiro争取对音乐的后期进行最细致的服务
                </p>
                <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }"
                             :to="{name:'service',params:{serviceId:10}}">
                  <a v-bind="$attrs" :href="href" @click="navigate" target="_blank">
                    查看详情&gt;&gt;
                  </a>
                </router-link>
              </div>
            </div>

            <div class="product-content">
              <div class="product-title">
                <p class="product-num">11</p>
                <div class="product-name">
                  <p>录影棚搭建</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc show-border">
                <p>
                  有着国内高品质录音棚的Mr.Hiro争取对音乐的后期进行最细致的服务
                </p>
                <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }"
                             :to="{name:'service',params:{serviceId:11}}">
                  <a v-bind="$attrs" :href="href" @click="navigate" target="_blank">
                    查看详情&gt;&gt;
                  </a>
                </router-link>
              </div>
            </div>

            <div class="product-content">
              <div class="product-title">
                <p class="product-num">12</p>
                <div class="product-name">
                  <p>直播设备销售</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc show-border">
                <p>
                  动态画面的呈现，是极富表现力，也最体现画质和音质的场景，好的产品可以让直播更加真实动听
                </p>
                <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }"
                             :to="{name:'service',params:{serviceId:12}}">
                  <a v-bind="$attrs" :href="href" @click="navigate" target="_blank">
                    查看详情&gt;&gt;
                  </a>
                </router-link>
              </div>
            </div>

            <div class="product-content">
              <div class="product-title">
                <p class="product-num">13</p>
                <div class="product-name">
                  <p>乐器租赁</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc show-border">
                <p>
                  对高端乐器的追求一直是Mr.Hiro的目标
                </p>
                <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }"
                             :to="{name:'service',params:{serviceId:13}}">
                  <a v-bind="$attrs" :href="href" @click="navigate" target="_blank">
                    查看详情&gt;&gt;
                  </a>
                </router-link>
              </div>
            </div>

            <div class="product-content">
              <div class="product-title">
                <p class="product-num">14</p>
                <div class="product-name">
                  <p>知识产权服务</p>
                  <p class="english-name"></p>
                </div>
              </div>
              <div class="product-desc show-border">
                <p>
                  Mr.Hiro致力于音乐版权的全方位保护
                </p>
                <a href="javascript:void(0);">敬请期待&gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LineWrap from "@/components/LineWrap.vue";


</script>

<style scoped>
.business-cooperation-wrap {
  position: relative;
  background-color: #fff;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-head {
  color: #d8d8d8;
  background-image: url('@/assets/images/19/19-1.png');
  background-repeat: no-repeat;
  background-position: 50%;
  height: 512px;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container {
  padding-top: 80px;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product img {
  padding: 40px 0 60px;
  width: 772px;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro {
  width: 1152px;
  margin: 0 auto;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro .product-content {
  width: 50%;
  display: inline-block;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro .product-content:nth-child(odd) {
  padding-right: 86px;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro .product-content:nth-child(2n) {
  padding-left: 86px;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro .product-content .product-title {
  padding-top: 34px;
  text-align: left;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro .product-content .product-title .product-num {
  display: inline-block;
  padding-right: 14px;
  color: #e3e3e6;
  font-size: 60px;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro .product-content .product-title .product-name {
  display: inline-block;
  color: #16161a;
  font-size: 22px;
  font-weight: 600;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro .product-content .product-title .product-name .english-name {
  color: #d4d4d9;
  font-size: 14px;
  /*font-family: IBMPlexSansBold;*/
  font-weight: 400;
  font-style: oblique;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro .product-content .product-desc {
  padding: 24px 0 36px;
  color: #45454d;
  text-align: left;
  font-size: 12px;
  border-bottom: 1px solid #ebebeb;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro .product-content .product-desc p {
  padding-bottom: 16px;
}

.business-cooperation-wrap .business-cooperation-content .business-cooperation-container .product .business-product-intro .product-content .product-desc a {
  color: #000;
  text-decoration: underline;
}
</style>
