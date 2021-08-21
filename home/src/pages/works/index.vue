<script>
import PreWorks from '@/components/preworks'
import CallMe from '@/components/callme/footer'

import { WORK_TABS, WORK_LIST } from '@/constant/metadata'

export default {
  name: 'Works',
  props: {
    defaultWork: String
  },
  data () {
    return {
      activeTab: 'all',
      selectWork: '',
      tabs: WORK_TABS()
    }
  },
  computed: {
    list () {
      const { activeTab, tabs } = this
      return WORK_LIST()
        .filter(item => activeTab === 'all' || activeTab === item.type)
        .map(item => ({
          ...item,
          tagName: tabs.find(t => t.value === item.type).tag,
          color: tabs.find(t => t.value === item.type).tagColor
        }))
    }
  },
  methods: {
    clickTab (val) {
      this.activeTab = val
      this.selectWork = ''
    },
    setSelectWork () {
      if (this.defaultWork) {
        this.selectWork = this.defaultWork

        const dom = document.querySelector('#work-container')
        let hieght = dom.offsetTop
        let scroll = 0
        const timer = setInterval (() => {
          document.scrollingElement.scrollTop = scroll
          scroll += 20

          if (scroll > hieght - 20) {
            clearInterval(timer)
          }
        }, 15)
      }
    }
  },
  mounted () {
    this.setSelectWork()
  },
  watch: {
    defaultWork () {
      this.setSelectWork()
    }
  },
  components: {
    PreWorks,
    CallMe
  }
}
</script>

<template lang="pug">
.works-box
  PreWorks(@changeTab="data => $emit('changeTab', data)")
  .container#work-container
    .tabs-box.d-flex
      .tabs-item.d-flex(
        v-for="(item, idx) in tabs",
        :key="idx",
        :class="{ 'is-active': activeTab === item.value }",
        @click="clickTab(item.value)"
      )
        img(
          :src="`${baseOss}${activeTab === item.value ? item.iconUrl + '-active' : item.iconUrl}.png`"
        )
        .label(:class="") {{ item.label }}
    .big-img(v-show="selectWork")
      img.w-100(:src="baseOss + selectWork")
    .work-box(v-show="!selectWork")
      .work-item.d-flex.animate__animated.animate__backInLeft(
        v-for="(item, idx) in list",
        :key="idx"
      )
        .left-img(@click="selectWork = item.bigImg")
          img.w-100(:src="`${baseOss}${item.preImg}`")
        .right-content
          div
            .title.d-flex.align-items-center
              span {{ item.title }}
              span.tag(:style="{ color: item.color }") {{ item.tagName }}
            .desc.font-m {{ item.desc }}
          .date.font-l {{ item.date }}
  CallMe(:isSimple="!!selectWork")
</template>

<style lang="scss">
.works-box {
  .tabs-box {
    margin: 4rem 0 5rem 0;
  }
  .tabs-item {
    padding: 0.75rem 1rem;
    background-color: #fff;
    margin-right: 4rem;
    align-items: center;
    font-size: 1.67rem;
    color: #DCDCDC;
    cursor: pointer;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
    .label {
      margin: 0 0.5rem;
    }
    &.is-active {
      box-shadow: 0rem 0rem 2rem 0rem rgba(122, 122, 122, 0.13);
      border-radius: 0.375rem;
      .label {
        color: #FEBC5B;
      }
    }
  }

  .work-box {
    margin-bottom: 4.4rem;
    .work-item {
      padding-bottom: 2.92rem;
      border-bottom: 1px solid #F4F4F4;
      margin-bottom: 3.92rem;
      .left-img {
        width: 21rem;
        min-width: 21rem;
        margin-right: 2.7rem;
        cursor: pointer;
      }
      .right-content {
        width: 34rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: 2rem;
          color: #0A0606;
          margin-bottom: 1.8rem;
          .tag {
            font-size: 1rem;
            border: 1px solid currentColor;
            padding: 0.1rem 0.8rem;
            border-radius: 0.5rem;
            margin-left: 1.4rem;
          }
        }
        .desc {
          color: #999999;
        }
        .date {
          color: #666666;
          margin-bottom: 0.375rem;
        }
      }
    }
  }

  .big-img {
    img {
      // transform: translateY(0.375rem);
      margin-bottom: 0.75rem;
    }
  }
}
</style>
