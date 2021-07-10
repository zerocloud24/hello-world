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
.nav-bar.d-flex.align-items-center(:class="{ 'is-works': value === 'works' }")
  .logo-box.w-50.h-100.font-l
    .name.f316-font.h-100 D.va
    .bg-prup
  .menu-box.d-flex.w-50
    .menu-item.font-16(
      v-for="item in menus",
      :key="item.value",
      :class="{ 'is-active': value === item.value, 'is-bg': item.value === 'callme' }",
      @click="$emit('input', item.value)"
    ) {{ item.label }}
</template>

<style lang="scss">
.nav-bar {
  height: 3.5rem;
  &.is-works {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      z-index: -2;
      width: 100%;
      height: 100%;
      background-color: #eef2f7;
    }
  }
}

.logo-box {
  position: relative;
  line-height: 3rem;
}

.logo-box .bg-prup {
  position: absolute;
  top: 0;
  left: 45%;
  transform: translate(-50%, -67%);
  background-color: #4F52B1;
  width: 20rem;
  height: 300%;
  border-radius: 50%;
  z-index: -1;
}

.logo-box .name {
  text-align: center;
  color: #fff;
  transform: translateX(-5%);
}

.menu-box {
  .menu-item {
    font-size: 1.17rem;
    height: 2.33rem;
    line-height: 2.33rem;
    padding: 0 1.5rem;
    margin: 0 1.5rem;
    cursor: pointer;

    &:hover,
    &.is-active {
      color: #4F52B1;
      font-weight: 600;
    }

    &.is-bg {
      font-size: 0.94rem;
      color: #fff;
      background-color: #5347CA;
      box-shadow: 0rem 0.5rem 1.1rem 0rem rgba(123, 111, 247, 0.46);
      border-radius: 0.375rem;
      font-weight: normal;
    }
  }
}

</style>
