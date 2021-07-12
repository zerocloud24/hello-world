<script>
import PreWorks from '@/components/preworks'

import { WORK_TABS } from '@/constant/metadata'

export default {
  name: 'Works',
  props: {},
  data () {
    return {
      activeTab: 'all',
      tabs: WORK_TABS()
    }
  },
  computed: {},
  methods: {},
  mounted () {},
  components: {
    PreWorks
  },
  watch: {}
}
</script>

<template lang="pug">
.works-box
  PreWorks
  .container
    .tabs-box.d-flex
      .tabs-item.d-flex(
        v-for="(item, idx) in tabs",
        :key="idx",
        :class="{ 'is-active': activeTab === item.value }"
      )
        img(
          :src="`${baseOss}${activeTab === item.value ? item.iconUrl + '-active' : item.iconUrl}.png`"
        )
        .label(:class="") {{ item.label }}
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
}
</style>
