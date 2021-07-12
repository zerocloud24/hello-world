<script>
import { EXPERIE_LIST, SKILL_LIST } from '@/constant/metadata'

import SkillChart from '@/components/skillchart'
import PreWorks from '@/components/preworks'
import CallMe from '@/components/callme'

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
    PreWorks,
    CallMe
  }
}
</script>

<template lang="pug">
.home-box
  .banner
    img.w-100(:src="`${baseOss}bg1.png`")
    .banner-info.w-100
      .f316-font.welcome-en.font-max {{ TextMap.welcomeEn }}
      .welcome-cn.font-l {{ TextMap.welcomeCn }}
      .primary-btn 了解更多 &gt;&gt;
  .container
    .experie-box.d-flex
      .experie-item.d-flex.align-items-center(
        v-for="(item, idx) in experieList",
        :key="idx"
      )
        .num.font-second {{ item.num }}
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
        .f316-font.font-204
          span {{ TextMap.canIDo.split('|')[0] }}
          span.text-yellow {{ TextMap.canIDo.split('|')[1] }}
        pre.skill-text {{ TextMap.skillInfo }}
        .primary-btn 查看作品 &gt;&gt;
    .chooseme-box
      .f316-font.font-204
        span {{ TextMap.chooseme.split('|')[0] }}
        span.text-yellow {{ TextMap.chooseme.split('|')[1] }}
      p.desc {{ TextMap.choosemeDesc }}

      SkillChart

  PreWorks
  .self-slogan.container
    .icon.right
      img(:src="`${baseOss}icon4.png`")
    .icon.left
      img(:src="`${baseOss}icon5.png`")
    .symbol &#8220;
    p.cn.font-m
      span(
        v-for="(c, i) in TextMap.sloganCn.split('|')",
        :key="c + i",
        :class="{ 'text-yellow': !(i % 2) }",
      ) {{ c }}
    pre.en.font-m {{ TextMap.sloganEn }}
    p.at.font-600 {{ TextMap.sloganAt }}
  CallMe
</template>

<style lang="scss">
.home-box {
  .banner {
    margin-top: 3.125rem;
    position: relative;
    .banner-info {
      position: absolute;
      width: 50rem;
      left: 50%;
      transform: translateX(-50%);
      top: 1.31rem;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 31.42rem;
        width: 4.63rem;
        height: 4.63rem;
        background-color: #FEBC5B;
        border-radius: 50%;
        z-index: -1;
      }
      .welcome-cn {
        margin: 1.58rem 0 2.04rem;
      }
    }
  }
}

.experie-box {
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0rem 0rem 6rem 0rem rgba(54, 57, 140, 0.13);
  border-radius: 0.375rem;
  height: 8.33rem;
  margin: 1.54rem auto 5.52rem;
  padding: 3.04rem 2rem;
  color: #8989A2;
  font-weight: 500;
  .experie-item {
    padding: 0 0.5rem;
     .num {
      color: #1E0F52;
      font-weight: 600;
      margin-right: 1.21rem;
    }
  }
}

.skill-box {
  align-items: flex-start;
  justify-content: space-between;
  .left {
    justify-content: space-between;
    .skill-item {
      width: 11rem;
      padding: 1.67rem 1.08rem 2.73rem;
      background-color: #fff;
      box-shadow: 0rem 0rem 2rem 0rem rgba(200, 200, 200, 0.28);
      border-radius: 1rem;
      text-align: center;
      transition: all 0.3s;
      margin-right: 2.63rem;
      &:hover {
        transform: translateY(-0.375rem);
      }
      &:nth-child(2n) {
        transform: translateY(4.05rem);
      }
      &:nth-child(2n):hover {
        transform: translateY(3.675rem);
      }
      img {
        width: 5rem;
      }
      .name {
        font-size: 1.18rem;
        margin-bottom: 1.13rem;
      }
      .desc {
        color: #A8A9C5;
        text-align: left;
        font-size: 0.79rem;
      }
    }
  }

  .right {
    width: 16rem;
    padding-top: 4rem;
    .skill-text {
      margin-bottom: 2.95rem;
    }
  }
}

.chooseme-box {
  text-align: center;
  margin-top: 11.2rem;
  > .desc {
    width: 50rem;
    margin: 1.75rem auto 3.3rem;
    font-size: 0.92rem;
  }
}

.self-slogan.container {
  padding: 3.5rem 0 3rem;
  text-align: center;
  position: relative;
  margin: 2rem auto;
  .symbol {
    font-size: 3rem;
    color: #EAEAEA;
    line-height: 10px;
  }
  .en {
    color: #D5D5D5;
  }
  .at {
    font-size: 1.17rem;
  }
  > .icon {
    position: absolute;
    &.right {
      width: 2.92rem;
      height: 2.88rem;
      right: 0;
      top: 3rem;
    }
    &.left {
      width: 3.38rem;
      height: 5.04rem;
      left: 0;
      bottom: 3rem;
    }
  }
}
</style>
