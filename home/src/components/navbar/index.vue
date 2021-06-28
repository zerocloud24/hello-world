<script>
export default {
  name: 'NavBar',
  props: {
    menus: Array,
    value: String
  }
}
</script>

<template lang="pug">
.nav-bar.d-flex.align-items-center
  .logo-box.w-50.h-100
    .name.f316-font.h-100 D.va
    .bg-prup
  .menu-box.d-flex.w-50
    .menu-item.font-16(
      v-for="item in menus",
      :key="item.value",
      :class="{ 'is-active': value === item.value }",
      @click="$emit('input', item.value)"
    ) {{ item.label }}
</template>

<style>
.nav-bar {
  height: 60px;
}


.logo-box {
  position: relative;
  font-size: 24px;
  line-height: 52px;
}

.logo-box .bg-prup {
  position: absolute;
  top: 0;
  left: 45%;
  transform: translate(-50%, -67%);
  background-color: #4F52B1;
  width: 400px;
  height: 300%;
  border-radius: 50%;
  z-index: -1;
}

.logo-box .name {
  text-align: center;
  color: #fff;
  transform: translateX(-5%);
}

.menu-box .menu-item {
  height: 36px;
  line-height: 36px;
  padding: 0 20px;
  margin: 0 20px;
  cursor: pointer;
}

.menu-box .menu-item:hover {
  color: #4F52B1;
  font-weight: 600;
}
.menu-box .menu-item.is-active {
  color: #fff;
  background-color: #5347CA;
  box-shadow: 0px 10px 20px 0px rgba(123, 111, 247, 0.46);
  border-radius: 6px;
  font-weight: normal;
}
</style>
