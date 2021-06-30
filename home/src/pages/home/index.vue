<script>
import { EXPERIE_LIST, SKILL_LIST } from '@/constant/metadata'

import SkillChart from '@/components/skillchart'
import PreWorks from '@/components/preworks'

export default {
  name: 'HomeBox',
  data () {
    return {
      experieList: EXPERIE_LIST(),
      skillList: SKILL_LIST()
    }
  },
  components: {
    SkillChart,
    PreWorks
  }
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
  .home-container
    .experie-box.d-flex
      .experie-item.d-flex.align-items-center(
        v-for="(item, idx) in experieList",
        :key="idx"
      )
        .num {{ item.num }}
        div
          div {{ item.en }}
          div {{ item.desc }}
    .skill-box.d-flex
      .left.d-flex
        .skill-item(
          v-for="(item, idx) in skillList",
          :key="idx"
        )
          img(:src="`${baseOss}${item.iconUrl}`")
          .name {{ item.name }}
          .desc {{ item.desc }}
      .right
        .f316-font.title
          span {{ TextMap.canIDo.split('|')[0] }}
          span.text-yellow {{ TextMap.canIDo.split('|')[1] }}
        pre.skill-text {{ TextMap.skillInfo }}
        .primary-btn 查看作品 &gt;&gt;
    .chooseme-box
      .f316-font.title
        span {{ TextMap.chooseme.split('|')[0] }}
        span.text-yellow {{ TextMap.chooseme.split('|')[1] }}
      p.desc {{ TextMap.choosemeDesc }}

      SkillChart

  PreWorks
</template>

<style lang="scss">
.home-box {
  height: 2500px;
  .f316-font.title {
    font-size: 32px;
  }
  .banner {
    margin-top: 50px;
    position: relative;
    .banner-info {
      position: absolute;
      width: 800px;
      left: 50%;
      transform: translateX(-50%);
      top: 10px;
      &::after {
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
      .welcome-en {
        font-size: 52px;
        letter-spacing: 2px;
      }
      .welcome-cn {
        font-size: 24px;
        margin: 10px 0 25px;
      }
    }
  }
}

.home-container {
  width: 72%;
  margin: 0 auto;
}
.experie-box {
  justify-content: space-between;
  margin-top: 50px;
  background-color: #fff;
  box-shadow: 0px 0px 152px 0px rgba(54, 57, 140, 0.13);
  border-radius: 6px;
  height: 100px;
  margin: 20px auto 70px;
  padding: 30px 20px;
  color: #8989A2;
  font-weight: 500;
  .experie-item {
    padding: 0 10px;
     .num {
      color: #1E0F52;
      font-size: 40px;
      font-weight: 600;
      margin-right: 10px;
    }
  }
}

.skill-box {
  align-items: flex-start;
  .left {
    width: calc(100% - 310px);
    justify-content: space-between;
    .skill-item {
      width: calc(33% - 10px);
      padding: 10px 30px 30px;
      background-color: #fff;
      box-shadow: 0px 0px 48px 3px rgba(200, 200, 200, 0.28);
      border-radius: 10px;
      text-align: center;
      transition: all 0.3s;
      &:hover {
        transform: translateY(-10px);
      }
      &:nth-child(2n) {
        transform: translateY(60px);
      }
      &:nth-child(2n):hover {
        transform: translateY(50px);
      }
      img {
        width: 70%;
      }
      .name {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .desc {
        color: #A8A9C5;
        text-align: left;
      }
    }
  }

  .right {
    width: 310px;
    padding: 60px 0 20px 40px;
    .skill-text {
      margin-bottom: 40px;
    }
  }
}

.chooseme-box {
  text-align: center;
  margin-top: 80px;
  > .desc {
    width: 80%;
    margin: 20px auto 40px;
  }
}
</style>
