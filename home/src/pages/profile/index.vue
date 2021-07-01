<script>
import { TIME_AXIS_DATA } from '@/constant/metadata'

import SkillChart from '@/components/skillchart'

export default {
  name: 'Profile',
  data () {
    return {
      timeAxisData: TIME_AXIS_DATA()
    }
  },
  components: {
    SkillChart
  }
}
</script>

<template lang="pug">
.profile-box
  .basic-info
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
</template>

<style lang="scss">
.profile-box {
  .basic-info {
    margin-bottom: 10.33rem;
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
        }
      }
      &.hidden-bd {
        border-left: 0.29rem solid transparent;
      }
    }
  }
}
</style>
