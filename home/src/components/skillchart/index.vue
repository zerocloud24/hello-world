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
    .title Professional skill
    .chart-bar-box
      .bar-item(
        v-for="(item, idx) in skillBarData",
        :key="idx"
      )
        .name {{ item.name }}
        .bar-bg.w-100
        .bar-active(:style="{ width: `${item.percent}%` }")
  .w-50.right
    .title Personal qualities
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
            .right-deg(:style="{ transform: `rotate(${(100 - item.percent) * 3.6 - 180}deg)` }")
          .num {{ item.percent }}%
        .name.text-center {{ item.name }}
        p.desc {{ item.desc }}
</template>

<style lang="scss">
$pieSize: 70px;

.skill-chart {
  text-align: left;
  .title {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 800;
  }
  > .left {
    .chart-bar-box {
      padding-top: 20px;
      .bar-item {
        position: relative;
        height: 90px;
        .name {
          font-weight: 600;
        }
        .bar-bg,
        .bar-active {
          position: absolute;
          top: 30px;
          border-radius: 6px;
          height: 15px;
          transition: all 0.3s;
          // &:hover {
          //   transform: scale(1.04);
          // }
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
    padding-left: 80px;
    .chart-pie-box {
      flex-wrap: wrap;
      align-items: flex-start;
      .pie-item {
        width: calc(50% - 20px);
        background: #fff;
        box-shadow: 0px 0px 48px 3px rgba(200, 200, 200, 0.28);
        border-radius: 10px;
        padding: 25px 20px 15px;
        margin-bottom: 20px;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.04);
        }
        &:nth-child(2n) {
          margin-left: 35px;
          transform: translateY(50%);
          &:hover {
            transform: translateY(50%) scale(1.04);
          }
        }
        .desc {
          color: #A8A9C5;
          font-size: 12px;
        }
        .pie-box {
          width: $pieSize;
          height: $pieSize;
          margin: 0 auto 15px;
          border-radius: 50%;
          position: relative;
          .num {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 2;
            transform: translate(-50%, -50%);
            font-size: 16px;
          }
          .circle {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 1;
            transform: translate(-50%, -50%);
            width: calc(100% - 15px);
            height: calc(100% - 15px);
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
              transform: rotate(-180deg);
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
