<script setup>
import {RouterView} from 'vue-router'
import HiroLogo from './components/HiroLogo.vue'
</script>

<template>
  <header>
    <div class="header_content">
      <HiroLogo class="logo" height="41px" width="200px"/>
      <div class="nav_bar">
        <ul class="tabs">
          <router-link :to="{name:'home'}" replace custom v-slot="{href, route, navigate, isActive, isExactActive}">
            <li :class="{active:isActive}" @click="navigate">
              <div class="tab-wrap">
                <p class="tab">首页</p>
                <p class="change-color">首页</p>
              </div>
            </li>
          </router-link>
          <router-link :to="{name:'brand'}" replace custom v-slot="{href, route, navigate, isActive, isExactActive}">
            <li :class="{active:isActive}" @click="navigate">
              <div class="tab-wrap">
                <p class="tab">品牌介绍</p>
                <p class="change-color">品牌介绍</p>
              </div>
            </li>
          </router-link>
          <router-link :to="{name:'stores'}" replace custom v-slot="{href, route, navigate, isActive, isExactActive}">
            <li :class="{active:isActive}" @click="navigate">
              <div class="tab-wrap">
                <p class="tab">门店信息</p>
                <p class="change-color">门店信息</p>
              </div>
            </li>
          </router-link>
          <router-link :to="{name:'enterprise'}" replace custom
                       v-slot="{href, route, navigate, isActive, isExactActive}">
            <li :class="{active:isActive}" @click="navigate">
              <div class="tab-wrap">
                <p class="tab">企业合作</p>
                <p class="change-color">企业合作</p>
              </div>
            </li>
          </router-link>
          <router-link :to="{name:'about'}" replace custom v-slot="{href, route, navigate, isActive, isExactActive}">
            <li :class="{active:isActive}" @click="navigate">
              <div class="tab-wrap">
                <p class="tab">关于Mr.Hiro</p>
                <p class="change-color">关于Mr.Hiro</p>
              </div>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </header>

  <RouterView/>
  <footer>
    <div class="footer_content">
      <div class="company_info">
        <div class="company_logo">
          <img src="@/assets/images/9/9-1.png" alt="logo">
        </div>
        <div class="company_content">
          <div class="content">
            <div class="content_item">
              <div class="content_cell font-blod">企业链接</div>
              <div class="content_cell font-blod">热门城市</div>
              <div class="content_cell font-blod">关于Mr.Hiro</div>
              <div class="content_cell font-blod">联系Mr.Hiro</div>
            </div>
            <div class="content_item">
              <div class="content_cell" onclick="window.open('http://www.ytzh.cn/')">
                <p>亚太中慧官网</p>
              </div>
              <div class="content_cell">
                <p>中国山东</p>
              </div>
              <div class="content_cell">
                <p>常见问题</p>
              </div>
              <div class="content_cell font-phone">
                <p>13287656101</p>
              </div>
            </div>
            <div class="content_item">
              <div class="content_cell" onclick="window.open('http://www.genyuanshichu.com/')">
                <p>中敏根源</p>
              </div>
              <div class="content_cell">
                <p>新加坡</p>
              </div>
              <div class="content_cell">
                <p>门店信息</p>
              </div>
              <div class="content_cell font-phone"></div>
            </div>
            <div class="content_item">
              <div class="content_cell"></div>
              <div class="content_cell">
                <p>日本</p>
              </div>
              <div class="content_cell">
                <p>企业合作</p>
              </div>
              <div class="content_cell pos-img">
                <div class="code_content">
                  <img data-v-87f2f512=""
                       src="@/assets/images/utils/weibo-icon.png"
                       class="code-icon">
                  <div class="code">
                    <img src="@/assets/images/9/9-2.png" alt="code">
                    <p class="code_attention">关注微博</p>
                  </div>
                </div>
                <div class="code_content">
                  <img data-v-87f2f512=""
                       src="@/assets/images/utils/redbook-icon.png"
                       class="code-icon">
                  <div class="code">
                    <img src="@/assets/images/9/9-2.png" alt="code">
                    <p class="code_attention">关注小红书</p>
                  </div>
                </div>
                <div class="code_content">
                  <img data-v-87f2f512=""
                       src="@/assets/images/utils/douyin-icon.png"
                       class="code-icon">
                  <div class="code">
                    <img src="@/assets/images/9/9-2.png" alt="code">
                    <p class="code_attention">关注抖音</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_item">
              <div class="content_cell"></div>
              <div class="content_cell"></div>
              <div class="content_cell"></div>
              <div class="content_cell"></div>
            </div>
          </div>
        </div>
        <div class="company_code">
          <img src="@/assets/images/9/9-2.png" alt="code">
          <p>扫码了解</p>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <p>浙公网安备 33011802000662</p>
      <p><a data-v-87f2f512="" href="https://beian.miit.gov.cn/" target="_blank"
            class="jump-page">浙ICP备11062584号-3</a></p>
    </div>
  </footer>
</template>

<style scoped>
header {
  background: #fff;
  width: 100%;
  vertical-align: baseline;
}

header .header_content {
  position: relative;
  width: 1152px;
  margin: 0 auto;
  text-align: right;
}

header .header_content .logo {
  position: absolute;
  left: 0;
  top: 26px;
  width: 200px;
  height: 41px;
}

header .header_content .nav_bar {
  display: inline-block;
}

header .header_content .nav_bar .tabs {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

header .header_content .nav_bar .tabs .active {
  color: #fff;
  background-color: #000;
  font-weight: 600;
}

header .header_content .nav_bar .tabs .active:after {
  display: none;
}

header .header_content .nav_bar .tabs .active:hover p {
  color: #fff;
  font-weight: 600;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

header .header_content .nav_bar .tabs li {
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 33px 28px;
  color: #16161a;
  background-color: #fff;
  font-size: 16px;
  font-weight: 400;
  transition: all .36s ease;
}

header .header_content .nav_bar .tabs li:hover p {
  color: #000;
  font-weight: 600;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}


header .header_content .nav_bar .tabs li:hover:before {
  color: #000;
  content: attr(data-title);
  display: inline-block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: center;
}

header .header_content .nav_bar .tabs li:after {
  position: absolute;
  right: 0;
  top: 33px;
  content: "";
  width: 1px;
  height: 22px;
  background-color: #e3e3e6;
  z-index: 9;
}

header .header_content .nav_bar .tabs li .tab-wrap {
  height: 22px;
  overflow: hidden;
}

header .header_content .nav_bar .tabs li .tab-wrap p {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  -webkit-transition: -webkit-transform .3s linear;
  transition: -webkit-transform .3s linear;
  transition: transform .3s linear;
  transition: transform .3s linear, -webkit-transform .3s linear;
  margin: 0;
}

footer {
  position: absolute;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e3e3e6;
}

footer .footer_content {
  position: relative;
  width: 1152px;
  height: 196px;
  margin: 0 auto 62px;
  padding-top: 48px;
}

footer .footer_content .company_info {

}

footer .footer_content .company_info .company_content .content {
  display: table;
}

footer .footer_content .company_info .company_logo {
  position: absolute;
  left: 0;
  display: inline-block;
  vertical-align: top;
}

footer .footer_content .company_info .company_logo img {
  width: 55px;
}

footer .footer_content .company_info .company_content {
  display: inline-block;
}

footer .footer_content .company_info .company_content .content .content_item {
  display: table-row;
}


footer .footer_content .company_info .company_content .content .content_item .content_cell {
  display: table-cell;
  text-align: left;
  padding: 5px 58px;
  font-size: 12px;
  color: #919199;
  cursor: pointer;
}

footer .footer_content .company_info .company_content .content .content_item .content_cell:hover {
  color: #000;
}

footer .footer_content .company_info .company_content .content .content_item .content_cell .line {
  width: 28px;
  height: 4px;
  background-color: #f2f2f5;
}

footer .footer_content .company_info .company_content .content .content_item .font-blod {
  color: #45454d;
  font-size: 14px;
  font-weight: 600;
  padding: 0 58px 11px;
}

footer .footer_content .company_info .company_content .content .content_item .font-phone {
  color: #000;
  font-size: 20px;
  font-weight: 600;
}

footer .footer_content .company_info .company_content .content .content_item .pos-img {
  position: absolute;
  bottom: 21px;
}

footer .footer_content .company_info .company_content .content .content_item .pos-img .code_content {
  position: relative;
  display: inline-block;
  padding-right: 5px;
}

footer .footer_content .company_info .company_content .content .content_item .pos-img .code_content img {
  display: inline-block;
}

footer .footer_content .company_info .company_content .content .content_item .pos-img .code_content .code-icon {
  width: 29px;
  height: 29px;
}

footer .footer_content .company_info .company_content .content .content_item .pos-img .code_content .code {
  position: absolute;
  width: 174px;
  height: 190px;
  background: url("@/assets/images/utils/code-border.png") no-repeat;
  background-size: 100%;
  opacity: 0;
  top: -190px;
  left: -72px;
  z-index: -1;
}

footer .footer_content .company_info .company_content .content .content_item .pos-img .code_content .code img {
  width: 140px;
  height: 140px;
  margin-left: 16px;
  margin-top: 16px;

}


footer .footer_content .company_info .company_content .content .content_item .pos-img .code_content:hover .code {
  opacity: 1;
  -webkit-transition: all 1s;
  transition: all 1s;
  z-index: 100;
}

footer .footer_content .company_info .company_content .content .content_item .pos-img .code_content .code p {
  text-align: center;
  margin-top: -2px;
}

footer .footer_content .company_info .company_content .content .content_item .pos-img .code_content .code .code_attention {
  color: #16161a;
}

footer .footer_content .company_info .company_code {
  position: absolute;
  right: 0;
  display: inline-block;
  vertical-align: top;
}

footer .footer_content .company_info .company_code img {
  width: 112px
}

footer .footer_content .company_info .company_code p {
  font-size: 14px;
  font-weight: 400;
  color: #45454d;
  text-align: center;
}

footer .footer_bottom {
  background-color: #f0f0f2;
  color: #919199;
  font-size: 14px;
  padding: 18px 0;
}

footer .footer_bottom p {
  display: inline-block;
}

footer .footer_bottom p:first-child:after {
  display: inline-block;
  content: "";
  height: 18px;
  width: 2px;
  background-color: #919199;
  vertical-align: bottom;
  margin: 0 18px;
}

footer .footer_bottom p .jump-page {
  color: #919199;
  text-decoration: none;
}

</style>
