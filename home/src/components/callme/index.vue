<script>
export default {
  name: 'CallMe',
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  mounted () {},
  components: {},
  watch: {}
}
</script>

<template lang="pug">
.call-me(:style="{ backgroundImage: `url(${baseOss}bg3@2x.png)` }")
  .container
    .f316-font.font-204
      span {{ TextMap.myColleague.split('|')[0] }}
      span.text-yellow {{ TextMap.myColleague.split('|')[1] }}
    p.callme.font-l {{ TextMap.callme }}
    p.call-type.d-flex
      span
        span.font-600 15071437560
        span.text-yellow.font-l （微信同号）
      span.font-600 973773273@qq.com
</template>

<style lang="scss">
.call-me {
  color: #fff;
  text-align: center;
  height: 21.25rem;
  background-size: cover;
  padding: 4.5rem 0 4rem;
  .call-type {
    justify-content: space-between;
    margin-top: 4rem;
  }
  .callme {
    color: #6063BB;
  }
  .font-600 {
    font-size: 2.17rem;
  }
}
</style>
