<script>
import { TIME_AXIS_DATA, BASIC_INFO, WORK_EXPERIE } from '@/constant/metadata'

import SkillChart from '@/components/skillchart'

export default {
  name: 'Profile',
  data () {
    return {
      timeAxisData: TIME_AXIS_DATA(),
      basicInfo: BASIC_INFO(),
      experieList: WORK_EXPERIE()
    }
  },
  components: {
    SkillChart
  }
}
</script>

<template lang="pug">
.profile-box
  .basic-info.container.d-flex
    .left-img
      .img-box
    .right-info
      .font-192.f316-font
        span {{ TextMap.basicInfo.split('|')[0] }}
        span.text-yellow {{ TextMap.basicInfo.split('|')[1] }}
      .info-list.d-flex
        .info-item(
          v-for="(item, idx) in basicInfo",
          :key="idx",
          :class="item.width === 100 ? 'w-100' : 'w-50'"
        )
          span.label {{ item.label }}:
          span.value.font-600 {{ item.value }}
  .work-experience
    .container
      .font-192.f316-font
        span {{ TextMap.workExperience.split('|')[0] }}
        span.text-yellow {{ TextMap.workExperience.split('|')[1] }}
      .experience-list.d-flex
        .experience-item(
          v-for="(item, idx) in experieList",
          :key="idx",
          :style="{ width: `${ item.width || 50 }%` }"
        )
          .time.font-600 {{ item.time }}
          .content.font-m
            span(
              v-for="(c, i) in item.content.split('|')",
              :key="c + i",
              :class="{ 'text-yellow': i % 2 }",
              v-html="c"
            )
  .profile-skill.container
    .title.text-center
      .font-192.f316-font
        span {{ TextMap.personalSkill.split('|')[0] }}
        span.text-yellow {{ TextMap.personalSkill.split('|')[1] }}
      .desc.font-m {{ TextMap.personalSkillDesc }}
    SkillChart
    .bg-circle
  .time-axis.container
    .time-axis-item(
      v-for="(item, idx) in timeAxisData",
      :key="idx",
      :class="{ 'is-small': item.type === 'samll', 'hidden-bd': item.notLine }"
    )
      .circle
      .name.f316-font.font-175(v-if="item.name") {{ item.name }}
      pre.desc.font-l
        span {{ item.desc.split('|')[0] }}
        span.font-600 {{ item.desc.split('|')[1] }}
  .floot-box.font-l(:style="{ backgroundImage: `url(${baseOss}bg2@2x.png)` }")
    p.cn {{ TextMap.workFlootTextCn }}
    p.en {{ TextMap.workFlootTextEn }}
</template>

<style lang="scss">
.profile-box {
  padding-top: 7.3rem;
  .basic-info {
    margin-bottom: 10.33rem;
    .left-img {
      position: relative;
      width: 19rem;
      min-width: 19rem;
      height: 19rem;
      background-color: #4F52B1;
      margin-top: 2.37rem;
      margin-right: 6.25rem;
      .img-box {
        position: absolute;
        top: -2.37rem;
        right: -2.88rem;
        width: 100%;
        height: 100%;
        background-color: #E4E4E4;
      }
    }
    .right-info {
      > .font-192 {
        margin-bottom: 2.3rem;
      }
      .info-list {
        flex-wrap: wrap;
        font-size: 1.33rem;
        .info-item {
          margin-bottom: 1.5rem;
          .label {
            color: #999999;
            font-weight: 500;
            margin-right: 1.38rem;
          }
          &:nth-last-child(2) {
            margin-top: 1rem;
          }
        }
      }
    }
  }
  .work-experience {
    background-color: #4F52B1;
    height: 27.2rem;
    padding: 3rem 0 4rem 0;
    color: #fff;
    margin-bottom: 6.17rem;
    .font-192 {
      margin-bottom: 3.5rem;
    }
    .experience-list {
      justify-content: space-between;
      flex-wrap: wrap;
      .experience-item {
        &:not(:last-child) {
          margin-bottom: 4.5rem;
        }
        &:nth-child(2) {
          padding-left: 5rem;
        }
        .time {
          font-size: 1.67rem;
        }
      }
    }
  }
  .profile-skill {
    position: relative;
    > .title > .desc {
      opacity: 0.35;
      margin: 1rem 0 3.7rem 0;
    }
    .bg-circle {
      position: absolute;
      width: 28.46rem;
      height: 28.46rem;
      background: #F8F7FF;
      border-radius: 50%;
      right: -2.5rem;
      top: 12rem;
      z-index: -1;
      &::before {
        content: '';
        position: absolute;
        width: 9.67rem;
        height: 9.67rem;
        background: rgba(233, 111, 148, 0.29);
        border-radius: 50%;
        bottom: 0;
        left: 0;
        transform: translate(4%, 36%);
      }
      &::after {
        content: '';
        position: absolute;
        width: 5.96rem;
        height: 5.96rem;
        background: rgba(254, 188, 91, 0.29);
        border-radius: 50%;
        right: 0;
        top: 0;
        transform: translate(0%, 75%);
      }
    }
  }
  .time-axis {
    margin-top: 100px;
    padding-left: 2.25rem;
    .time-axis-item {
      padding-left: 6.33rem;
      border-left: 0.29rem solid #F0F0F6;
      height: 14rem;
      position: relative;
      .name {
        padding-bottom: 1.67rem;
      }
      .desc {
        margin: 0;
      }
      .circle {
        width: 4.21rem;
        height: 4.21rem;
        background-color: #dcdaf2;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(calc(-50% - 0.15rem), 0);
        border: 0.6rem solid rgba($color: #f6f6fb, $alpha: 0.8);
        &::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 1.9rem;
          height: 1.9rem;
          border-radius: 50%;
          background-color: #5347CA;
          box-shadow: 0rem 0rem 1rem 0rem rgba(83, 71, 202, 0.46);
        }
      }
      &.is-small {
        padding-left: 2.67rem;
        height: 9.55rem;
        .circle {
          width: 1.08rem;
          height: 1.08rem;
          background: #5347CA;
          box-shadow: 0rem 0rem 1rem 0rem rgba(83, 71, 202, 0.46);
          transform: translate(calc(-50% - 0.15rem), 36%);
          border: 0;
          &::before {
            width: 0;
          }
        }
      }
      &.hidden-bd {
        border-left: 0.29rem solid transparent;
      }
    }
  }
  .floot-box {
    text-align: center;
    height: 15rem;
    background-position: 50% 26%;
    .cn {
      padding-top: 5.6rem;
      margin-bottom: 1rem;
    }
    .en {
      color: #B8B3C7;
      margin: 0;
    }
  }
}
</style>
