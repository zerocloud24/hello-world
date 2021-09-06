<script>
export default {
  name: 'CallMeFooter',
  props: {
    isSimple: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template lang="pug">
.call-me(
  :style="{ backgroundImage: `url(${baseOss}bg3@2x.png)` }",
  :class="{ 'is-simple': isSimple }"
)
  .container
    .f316-font.font-204(v-if="!isSimple")
      span {{ TextMap.myColleague.split('|')[0] }}
      span.text-yellow {{ TextMap.myColleague.split('|')[1] }}
    p.callme.font-l(v-if="!isSimple") {{ TextMap.callme }}
    p.call-type.d-flex
      span
        span.font-600 {{ TextMap.phone }}
        span.text-yellow.font-l （微信同号）
      span.font-600 {{ TextMap.email }}
    .copyright-info
      span Copyright 2021 版权所有 ©D.va
      a(href="http://beian.miit.gov.cn/", target="_blank") 鄂ICP备2021015303号
</template>

<style lang="scss">
$copyrightColor: #9799d8;

.call-me {
  color: #fff;
  text-align: center;
  height: 21.25rem;
  background-size: cover;
  padding: 4.5rem 0 4rem;
  &.is-simple {
    height: 10.63rem;
    padding: 3rem 0 3rem;
    background-position: center;
  }
  .call-type {
    justify-content: space-between;
    margin-top: 1rem;
  }
  .callme {
    color: #6063BB;
    margin-bottom: 3rem;
  }
  .copyright-info {
    font-size: 14px;
    color: $copyrightColor;
    margin-top: 1.5rem;
    a {
      color: $copyrightColor;
    }
    span {
      margin-right: 0.5rem;
    }
  }
  .font-600 {
    font-size: 2.17rem;
  }
}
</style>
