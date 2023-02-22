<template>
  <div class="store-list">
    <div class="store-item">
      <div class="item-left">
        <p class="name gold-name"> 日本大阪Mr.Hiro Car RENTAL </p>
        <img src="@/assets/images/utils/store-icon.png" class="logo">
        <p class="address">
          门店地址:
          <span class="address-detail">
            日本，大版市大正区泉尾4-12-21
          </span>
        </p>
        <p class="phone">
          门店客服：
          <span>06-6710-9972</span>
        </p>
        <p class="time">
          营业时间：
          <span>
            10:00:00 - 22:00:00
          </span>
        </p>
        <p class="show-btn gold-map">
<!--          查看地图导航&gt;-->
        </p>
      </div>
      <div class="item-right">
        <img src="@/assets/images/18/18-1.png">
      </div>
    </div>
    <div class="store-item">
      <div class="item-left">
        <p class="name gold-name"> 中国山东 Mr.Hior Music </p>
        <img src="@/assets/images/utils/store-icon.png" class="logo">
        <p class="address">
          门店地址:
          <span class="address-detail">
<!--            北京市东城区长安街1号东方新天地  负一层BB57A号（地铁1号线王府井站A口、进商场负一层 第四街区）-->
          </span>
        </p>
        <p class="phone">
          门店客服：
          <span>13287656101</span>
        </p>
        <p class="time">
          营业时间：
          <span>
            10:00:00 - 22:00:00
          </span>
        </p>
        <p class="show-btn gold-map">
<!--          查看地图导航&gt;-->
        </p>
      </div>
      <div class="item-right">
        <img src="@/assets/images/18/18-2.png">
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.store-list {
  width: 1152px;
  margin: 0 auto 30px;
}

.store-list .store-item {
  background-color: #fafafa;
  margin: 10px 0;
  max-height: 314px;
}

.store-list .store-item .item-left {
  width: 466px;
  padding: 30px 58px 42px 40px;
  text-align: left;
}

.store-list .store-item .item-left, .store-info .store-list .store-item .item-right {
  display: inline-block;
  vertical-align: top;
}

.store-list .store-item .item-right {
  width: 686px;
  height: 315px;
  overflow: hidden;
}

.store-list .store-item .item-left .name {
  display: inline-block;
  max-width: 300px;
  font-size: 24px;
  font-weight: 600;
  color: #45454d;
  vertical-align: bottom;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.store-list .store-item .item-left .gold-name {
  color: #8a8173;
}

.store-list .store-item .item-left img, .store-list .store-item .item-right img {
  width: 686px;
}

.store-list .store-item .item-left .logo {
  display: inline-block;
  margin-left: 14px;
  width: 22px;
  height: 22px;
}


.store-list .store-item .item-left .address {
  padding: 25px 0 30px;
  font-size: 14px;
  color: #45454d;
}

.store-list .store-item .item-left .address .address-detail {
  display: block;
  color: #919199;
}

.store-list .store-item .item-left .phone {
  color: #45454d;
  font-size: 14px;
}

.store-list .store-item .item-left .phone span {
  color: #919199;
}

.store-list .store-item .item-left .time {
  padding: 10px 0 30px;
  color: #45454d;
  font-size: 14px;
}

.store-list .store-item .item-left .time span {
  color: #919199;
}

.store-list .store-item .item-left .show-btn {
  color: #000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.store-list .store-item .item-left .gold-map {
  color: #8a8173;
}

.store-list .store-item .item-right {
  width: 686px;
  height: 315px;
  overflow: hidden;
}
</style>
