<script>
import { EXPERIE_LIST } from '@/constant/metadata'

export default {
  name: 'HomeBox',
  props: {},
  data () {
    return {
      experieList: EXPERIE_LIST()
    }
  },
  computed: {},
  methods: {},
  mounted () {},
  components: {},
  watch: {}
}
</script>

<template lang="pug">
.home-box
  .banner
    img.w-100(:src="`${baseOss}bg1.png`")
    .banner-info.w-100
      .f316-font.welcome-en {{ TextMap.welcomeEn }}
      .welcome-cn {{ TextMap.welcomeCn }}
      .primary-btn 了解更多 &gt;&gt;
  .experie-box.d-flex
    .experie-item.d-flex.align-items-center(
      v-for="(item, idx) in experieList",
      :key="idx"
    )
      .num {{ item.num }}
      div
        div {{ item.en }}
        div {{ item.desc }}
</template>

<style>
.home-box {
  height: 1500px;
}
.home-box .banner {
  margin-top: 50px;
  position: relative;
}
.home-box .banner .banner-info {
  position: absolute;
  width: 800px;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
}
.home-box .banner .banner-info::after {
  content: '';
  position: absolute;
  top: 0px;
  left: 484px;
  width: 65px;
  height: 65px;
  background-color: #FEBC5B;
  border-radius: 50%;
  z-index: -1;
}
.banner-info .welcome-en {
  font-size: 52px;
  letter-spacing: 2px;
}
.banner-info .welcome-cn {
  font-size: 24px;
  margin: 10px 0 25px;
}

.experie-box {
  justify-content: space-between;
  margin-top: 50px;
  background-color: #fff;
  box-shadow: 0px 0px 152px 0px rgba(54, 57, 140, 0.13);
  border-radius: 6px;
  height: 100px;
  width: 72%;
  margin: 20px auto 50px;
  padding: 30px 20px;
  color: #8989A2;
  font-weight: 500;
}
.experie-box .experie-item {
  padding: 0 10px;
}
.experie-box .experie-item .num {
  color: #1E0F52;
  font-size: 40px;
  font-weight: 600;
  margin-right: 10px;
}
</style>
