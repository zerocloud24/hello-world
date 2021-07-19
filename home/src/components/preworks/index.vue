<script>
import { PRE_WORK_LIST } from '@/constant/metadata'

const NUM = 16.46 // 每次移动的宽度  -》 每块的宽度 加上 右边距的宽度： 14.58 + 1.88

export default {
  name: 'PreWorks',
  data () {
    return {
      preWorkList: PRE_WORK_LIST(),
      offset: 0,
      maxOffset: NUM
    }
  },
  methods: {
    getRightBoxWidth () {
      // const container = document.querySelector('#pre-works-container')
      const prentW = document.querySelector('#pre-works-container').clientWidth
      const totalW = document.querySelector('#pre-works-content').clientWidth

      const fSize = window.getComputedStyle(document.querySelector('html'), null).getPropertyValue('font-size').split('px')[0] || 16
      this.maxOffset = (totalW - prentW) / parseInt(fSize)
    },
    handleSwitch (type) {
      const n = type === 'toleft' ? NUM : -NUM

      const { offset, maxOffset } = this
      const cur = offset + n

      this.offset = cur > 0 ? 0 : cur < -maxOffset ? -maxOffset : cur
    }
  },
  mounted () {
    // 暂时只执行一次，后面可能需要watch windows size
    this.getRightBoxWidth()
  }
}
</script>

<template lang="pug">
.pre-works.d-flex(:style="{ backgroundImage: `url(${baseOss}bg2@2x.png)` }")
  .left
    .f316-font.font-204
      span {{ TextMap.recentWork.split('|')[0] }}
      span.text-yellow {{ TextMap.recentWork.split('|')[1] }}
    pre.skill-text {{ TextMap.recentWorkDesc }}
    .primary-btn(@click="$emit('changeTab', 'works')") 查看全部 &gt;&gt;
  .right#pre-works-container
    .pre-work-list.d-flex#pre-works-content(:style="{ left: `${offset}rem` }")
      .work-item(
        v-for="(item, idx) in preWorkList",
        :key="idx"
      )
        .img-box
          img.w-100(:src="`${baseOss}${item.imgUrl}`")
        .info
          .name {{ item.name }}
          .desc {{ item.desc }}
          .time.small {{ item.time }}
    .switch-btn
      .btn.to-left-btn(
        @click="handleSwitch('toleft')",
        :class="{ 'disabled': offset >= 0 }"
      ) &larr;
      .btn.to-right-btn(
        @click="handleSwitch('toright')",
        :class="{ 'disabled': offset <= -maxOffset }"
      ) &rarr;
</template>

<style lang="scss">
.pre-works {
  text-align: left;
  height: 34.25rem;
  background-size: cover;
  padding: 4rem 0 2.5rem calc((100% - 58.3rem) / 2);
  width: 100%;
  overflow: hidden;
  > .left {
    width: 24.17rem;
    padding-top: 3.88rem;
    .skill-text {
      margin: 1.13rem 0 3.18rem;
    }
  }
  > .right {
    width: calc(100% - 24.17rem);
    overflow: hidden;
    position: relative;
    .pre-work-list {
      color: #999;
      position: absolute;
      left: 0;
      top: 0;
      transition: all 0.5s;
      .work-item {
        background-color: #fff;
        border-radius: 0.375rem;
        width: 14.58rem;
        min-width: 14.58rem;
        max-width: 14.58rem;
        margin-right: 1.88rem;
        .img-box {
          height: 14.58rem;
          background-color: #7A7A7A;
          border-radius: 0.375rem;
        }
        .info {
          padding: 0.85rem 1.25rem 0rem;
        }
        .name {
          color: #333333;
          font-weight: 500;
          font-size: 1.17rem;
        }
        .desc {
          margin: 0.5rem 0 0.75rem;
        }
        .time {
          text-align: right;
        }
      }
    }

    .switch-btn {
      width: 13.5rem;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      .btn {
        width: 5.58rem;
        height: 2.38rem;
        line-height: 2.3rem;
        font-size: 2.14rem;
        text-align: center;
        border-radius: 1rem 0rem 1rem 0rem;
        background-color: #fff;
        color: #5347CA;
        cursor: pointer;
        &.disabled {
          color: #D6D6D6;
        }
      }
    }
  }
}
</style>
