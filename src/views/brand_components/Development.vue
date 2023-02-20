<template>
  <div class="development-path-wrap">
    <div class="development-path-content">
      <div class="development-path-title">
        <p>Mr.Hiro 发展历程</p>
        <span>快速发展，把高品质音乐节带向每一个家庭</span>
      </div>
      <div class="development-path-intro">
        <ul>
          <li>
            <div class="content">
              <p class="title">第三家 Mr.Hiro × SHANDONG上线</p>
              <p class="tip" style="display: none"></p>
              <p class="time">2023.1.1</p>
            </div>
          </li>
          <li>
            <div class="content">
              <p class="title">2019 Mr.Hiro × 米言文化</p>
              <p class="tip" style="display: none"></p>
              <p class="time">2019</p>
            </div>
          </li>
          <li>
            <div class="content">
              <p class="title">2018 Mr.Hiro Car Studio在日本上线</p>
              <p class="tip" style="display: none"></p>
              <p class="time">2018</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.development-path-wrap {
  background-color: #fff;
  position: relative;
}

.development-path-wrap .development-path-content {
  margin: 100px auto 0;
}

.development-path-wrap .development-path-content .development-path-title {
  color: #16161a;
}

.development-path-wrap .development-path-content .development-path-title p {
  font-size: 46px;
  font-weight: 600;
}

.development-path-wrap .development-path-content .development-path-title span {
  display: block;
  padding-top: 10px;
  font-size: 16px;
  font-weight: 300;
}

.development-path-wrap .development-path-content .development-path-intro {
  margin-top: 85px;
}

.development-path-wrap .development-path-content .development-path-intro ul {
  background: #fff;
  padding: 50px 0;
}

.development-path-wrap .development-path-content .development-path-intro ul li {
  background: #e3e3e6;
  position: relative;
  margin: 0 auto;
  width: 1px;
  min-height: 150px;
  padding-bottom: 40px;
  list-style-type: none;
}

.development-path-wrap .development-path-content .development-path-intro ul li .content {
  position: relative;
  top: -30px;
  width: 600px;
}

.development-path-wrap .development-path-content .development-path-intro ul li:nth-child(odd) .content {
  left: 50px;
}

.development-path-wrap .development-path-content .development-path-intro ul li:before {
  content: "";
  background: #48ce55;
  position: absolute;
  left: 50%;
  top: 0;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 13px;
  height: 13px;
  border-radius: 50%;
}

.development-path-wrap .development-path-content .development-path-intro ul li .content p {
  margin: 0;
  padding: 0;
  text-align: left;
}

.development-path-wrap .development-path-content .development-path-intro ul li .content .title {
  color: #45454d;
  font-size: 24px;
  font-weight: 600;
}

.development-path-wrap .development-path-content .development-path-intro ul li .content .tip {
  padding: 4px 0 20px;
  color: #45454d;
  font-size: 14px;
  font-weight: 300;
}

.development-path-wrap .development-path-content .development-path-intro ul li .content .time {
  color: #919199;
  font-size: 16px;
  font-weight: 300;
}

.development-path-wrap .development-path-content .development-path-intro ul li:nth-child(2n):before {
  background: #000;
}

.development-path-wrap .development-path-content .development-path-intro ul li:nth-child(2n) .content {
  left: -645px;
}

.development-path-wrap .development-path-content .development-path-intro ul li:nth-child(2n) .content p {
  text-align: right;
}
</style>