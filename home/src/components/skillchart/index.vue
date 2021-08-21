<script>
import { SKILL_BAR_DATA, SKILL_PIE_DATA } from '@/constant/metadata'

export default {
  name: 'SkillChart',
  data () {
    return {
      skillBarData: SKILL_BAR_DATA(),
      skillPieData: SKILL_PIE_DATA()
    }
  }
}
</script>

<template lang="pug">
.skill-chart.d-flex
  .w-50.left
    .title.font-m Professional skill
    .chart-bar-box
      .bar-item(
        v-for="(item, idx) in skillBarData",
        :key="idx"
      )
        .name {{ item.name }}
        .bar-bg.w-100
        .bar-active(:style="{ width: `${item.percent}%` }")
  .w-50.right
    .title.font-m Personal qualities
    .chart-pie-box.d-flex
      .pie-item(
        v-for="(item, idx) in skillPieData",
        :key="idx"
      )
        .pie-box(:style="{ background: item.color }")
          .circle
          .left
            .left-deg
          .right
            .right-deg(:style="{ transform: `rotate(${(100 - item.percent) * 3.6 - 180}deg) translateY(1px)` }")
          .num {{ item.percent }}%
        .name.text-center {{ item.name }}
        p.desc.font-xs {{ item.desc }}
</template>

<style lang="scss">
$pieSize: 80px;

.skill-chart {
  text-align: left;
  margin-bottom: 4rem;
  .title {
    font-weight: 800;
  }
  > .w-50 > .title {
    margin-bottom: 2.04rem;
  }
  > .left {
    .chart-bar-box {
      padding-top: 0.54rem;
      .bar-item {
        position: relative;
        height: 6rem;
        .name {
          font-weight: 600;
        }
        .bar-bg,
        .bar-active {
          position: absolute;
          top: 2.3rem;
          border-radius: 0.375rem;
          height: 1rem;
          transition: all 0.3s;
        }
        .bar-bg {
          background-color: #E7E7F1;
        }
        .bar-active {
          background-color: #5347CA;
          z-index: 1;
          &:hover {
            transform: scale(1.04);
          }
        }
      }
    }
  }

  > .right {
    padding-left: 6rem;
    .chart-pie-box {
      flex-wrap: wrap;
      align-items: flex-start;
      .pie-item {
        width: 10.3rem;
        height: 13.5rem;
        background: #fff;
        box-shadow: 0rem 0rem 2rem 0rem rgba(200, 200, 200, 0.28);
        border-radius: 1rem;
        padding: 1.33rem 1rem 1rem;
        margin-bottom: 1rem;
        &:nth-child(2n) {
          margin-left: 2.17rem;
          transform: translateY(50%);
          height: 14rem;
        }
        .name {
          font-size: 0.83rem;
        }
        .desc {
          color: #A8A9C5;
        }
        .pie-box {
          width: $pieSize;
          height: $pieSize;
          margin: 0 auto 0.92rem;
          border-radius: 50%;
          position: relative;
          .num {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 2;
            transform: translate(-50%, -50%);
          }
          .circle {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 1;
            transform: translate(-50%, -50%);
            // width: calc(100% - 1rem);
            // height: calc(100% - 1rem);
            width: 80%;
            height: 80%;
            background: white;
            border-radius: 50%;
          }
          .left, .right {
            width: 50%;
            height: 100%;
            float: left;
            overflow: hidden;
          }
          .left-deg, .right-deg {
            width: 100%;
            height: 100%;
            background: #E7E7F1;
          }
          .left {
            border-radius: $pieSize 0 0 $pieSize;
            .left-deg {
              transform-origin: right center;
              transform: rotate(-180deg) translateX(-1px);
            }
          }
          .right {
            border-radius: 0 $pieSize $pieSize 0;
            .right-deg {
              transform-origin: left center;
              transform: rotate(-90deg);
            }
          }
        }
      }
    }
  }
}

</style>
