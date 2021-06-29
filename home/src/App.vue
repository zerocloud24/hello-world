<template lang="pug">
  #app
    NavBar(:menus="menus", v-model="currentTab")
    components(:is="current")
</template>

<script>
import NavBar from '@/components/navbar'

import Home from '@/pages/home'
import Profile from '@/pages/profile'

export default {
  name: 'App',
  data () {
    return {
      currentTab: 'home'
    }
  },
  components: {
    NavBar
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
          component: ''
        },
        {
          value: 'callme',
          label: '联系我',
          component: ''
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 1080px;
  overflow-x: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1E0F52;
  font-size: 14px;
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

.f316-font {
  font-family: mFont;
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

.font-16 {
  font-size: 16px;
}

.primary-btn {
  display: inline-block;
  cursor: pointer;
  background-color: #5347CA;
  padding: 6px 15px;
  box-shadow: 0px 6px 20px 0px rgb(123 111 247 / 46%);
  border-radius: 5px;
  color: #fff;
}
</style>
