<script>
import { WORK_LIST } from '@/constant/metadata'

export default {
  name: 'PreWorks',
  data () {
    return {
      workList: WORK_LIST()
    }
  }
}
</script>

<template lang="pug">
.pre-works.d-flex(:style="{ backgroundImage: `url(${baseOss}bg2@2x.png)` }")
  .left
    .f316-font.title
      span {{ TextMap.recentWork.split('|')[0] }}
      span.text-yellow {{ TextMap.recentWork.split('|')[1] }}
    pre.skill-text {{ TextMap.recentWorkDesc }}
    .primary-btn 查看全部 &gt;&gt;
  .right
    .pre-work-list.d-flex
      .work-item(
        v-for="(item, idx) in workList",
        :key="idx"
      )
        .img-box
        .info
          .name {{ item.name }}
          .desc {{ item.desc }}
          .time.small {{ item.time }}
</template>

<style lang="scss">
.pre-works {
  text-align: left;
  height: 500px;
  background-size: cover;
  padding: 60px 0 20px 14%;
  width: 100%;
  overflow: hidden;
  > .left {
    width: 400px;
    padding-top: 40px;
  }
  > .right {
    width: calc(100% - 400px);
    overflow: hidden;
    .pre-work-list {
      color: #999;
      .work-item {
        background-color: #fff;
        border-radius: 6px;
        width: 35%;
        min-width: 35%;
        margin-right: 20px;
        .img-box {
          height: 200px;
          background-color: #7A7A7A;
          border-radius: 6px;
        }
        .info {
          padding: 15px 20px;
        }
        .name {
          color: #333333;
          font-weight: 500;
        }
        .desc {
          margin: 10px 0;
        }
        .time {
          text-align: right;
        }
      }
    }
  }
}
</style>
