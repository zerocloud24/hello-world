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
    setDefaultScroll () {
      const dom = document.querySelector('#work-container')
      let hieght = dom.offsetTop

      // 当页面滚动高度低于tab box时，向下滚动，否则向上滚动
      const currentScroll = document.scrollingElement.scrollTop
      currentScroll < hieght ? this.downScroll(currentScroll, hieght) : this.upScroll(currentScroll, hieght)
    },
    downScroll (scroll, hieght) {
      const timer = setInterval (() => {
        document.scrollingElement.scrollTop = scroll
        scroll += 48

        if (scroll > hieght - 16) {
          clearInterval(timer)
        }
      }, 8)
    },
    upScroll (scroll, hieght) {
      const timer = setInterval (() => {
        document.scrollingElement.scrollTop = scroll
        scroll -= 48
        if (scroll < hieght - 16) {
          clearInterval(timer)
        }
      }, 8)
    }
  },
  mounted () {
    if (this.defaultWork) {
      this.selectWork = this.defaultWork
    }
  },
  watch: {
    defaultWork (val) {
      this.selectWork = val
    },
    selectWork () {
      this.setDefaultScroll()
    },
    activeTab () {
      this.setDefaultScroll()
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
  #work-container
    .tabs-box
      .container.d-flex
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
    .container
      .big-img(
        v-for="(item, idx) in list",
        :key="idx"
      )
        img.w-100(
          v-show="selectWork === item.bigImg",
          :src="baseOss + item.bigImg"
        )
    .work-box(v-show="!selectWork")
      .work-item(
        v-for="(item, idx) in list",
        :key="idx"
      )
        .container.d-flex
          //- .animate__animated.animate__backInLeft
          .left-img(@click="selectWork = item.bigImg")
            img.w-100(:src="`${baseOss}${item.preImg}`")
          .right-content
            div
              .title.d-flex.align-items-center
                span.name(@click="selectWork = item.bigImg") {{ item.title }}
                span.tag(:style="{ color: item.color }") {{ item.tagName }}
              .desc.font-m {{ item.desc }}
            .date.font-l {{ item.date }}
  CallMe(:isSimple="!!selectWork")
</template>

<style lang="scss">
.works-box {
  .tabs-box {
    margin: 2.5rem 0 2rem 0;
    padding: 1.5rem 0;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 99;
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
      padding-top: 2rem;
      > .container {
        margin-top: 2rem;
        padding-bottom: 3.92rem;
        border-bottom: 1px solid #F4F4F4;
      }
      &:hover {
       background-color: #F0F0F0;
      }
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
          font-size: 1.9rem;
          color: #0A0606;
          margin-bottom: 1.8rem;
          > .name {
            cursor: pointer;
            &:hover {
              color: #FEBC5B;
            }
          }
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
