<template lang="pug">
  #app
    NavBar(
      v-model="currentTab",
      :menus="menus",
      @showDialog="showDialog = true"
    )
    components(
      :is="current",
      :defaultWork="defaultWork",
      @changeTab="changeTab"
    )
    .dialog-wrapper(v-if="showDialog")
      .dialog-bg(@click="showDialog = false")
      .dialog-box
        CallMe(@closeDialog="showDialog = false")
</template>

<script>
import NavBar from '@/components/navbar'

import Home from '@/pages/home'
import Profile from '@/pages/profile'
import Works from '@/pages/works'

import CallMe from '@/components/callme/dialog'

export default {
  name: 'App',
  data () {
    return {
      currentTab: 'home',
      showDialog: false,
      defaultWork: ''
    }
  },
  components: {
    NavBar,
    CallMe
  },
  computed: {
    current () {
      return this.menus.find(item => item.value === this.currentTab).component
    },
    menus () {
      return [
        {
          value: 'home',
          label: '首页',
          component: Home
        },
        {
          value: 'profile',
          label: '简介',
          component: Profile
        },
        {
          value: 'works',
          label: '作品',
          component: Works
        },
        {
          value: 'callme',
          label: '联系我',
          component: ''
        }
      ]
    }
  },
  methods: {
    changeTab ({ val, defaultWork }) {
      this.currentTab = val
      this.defaultWork = defaultWork
    }
  },
  watch: {
    currentTab (val) {
      window.scrollTo(0,0)
      if (val !== 'works') {
        this.defaultWork = ''
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

@media only screen and (max-width: 960px){
  html {
    font-size: 14px;
  }
}

@media only screen and (min-width: 960px) and (max-width: 1280px){
  html {
    font-size: 14px;
  }
}

@media only screen and (min-width: 1280px) and (max-width: 1600px){
  html {
    font-size: 16px;
  }
}

@media only screen and (min-width: 1600px) and (max-width: 1920px){
  html {
    font-size: 18px;
  }
}

@media only screen and (min-width: 1920px){
  html {
    font-size: 20px;
  }
}

body {
  margin: 0;
  min-width: 960px;
  overflow-x: auto;
}

#app {
  font-family: PingFangSC-Regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1E0F52;
}

#app pre {
  font-family: PingFangSC-Regular, sans-serif;
}

@font-face {
  font-family: mFont;
  src: url('~@/assets/fonts/316-CAI978.ttf') format('truetype');
  src: url("~@/assets/fonts/316-CAI978.eot");
  src: url("~@/assets/fonts/316-CAI978.eot?#iefix") format("embedded-opentype"),
       url("~@/assets/fonts/316-CAI978.woff2") format("woff2"),
       url("~@/assets/fonts/316-CAI978.woff") format("woff"),
       url("~@/assets/fonts/316-CAI978.ttf") format("truetype"),
       url("~@/assets/fonts/316-CAI978.svg#316-CAI978") format("svg");
}

.dialog-wrapper {
  .dialog-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.80);
  }

  .dialog-box {
    position: fixed;
    z-index: 110;
    width: 22.3rem;
    height: 26rem;
    background-color: #fff;
    border-radius: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
}
.container {
  width: 58.3rem;
  margin: 0 auto;
}

.f316-font {
  font-family: mFont !important;
}

.d-flex {
  display: flex;
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

.w-50 {
  width: 50%;
}

.align-items-center {
  align-items: center;
}

.primary-btn {
  display: inline-block;
  cursor: pointer;
  background-color: #5347CA;
  padding: 0.375rem 1rem;
  box-shadow: 0 0.375rem 1.25rem 0 rgba(123, 111, 247, 0.46);
  border-radius: 0.375rem;
  color: #fff;
}

.text-yellow {
  color: #FEBC5B;
}

.text-center {
  text-align: center;
}

.small {
  font-size: 0.75rem;
}

.font-600 {
  font-weight: 600;
}
</style>
