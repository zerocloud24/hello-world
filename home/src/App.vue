<template>
  <div id="app">
    <h1 class="f316-font">Hello Zerocloud</h1>
    <h2>D.va</h2>
    <h2 class="f316-font">D.va</h2>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
