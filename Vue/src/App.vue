<template>
  <div id="#main_video">
    <div class="video">
      <img src="../public/parking.jpg" width="100%" alt />
    </div>
    <div id="app">
      <div id="nav"></div>
      <router-view />
    </div>
  </div>
</template>

<style lang='scss' scoped>
#app {
  background: rgba(2, 2, 2, 0.85);
  width: 100%;
  height: 100vh;
  bottom: 0;
  position: absolute;
}
#main_video {
  right: 0;
  bottom: 0;
  max-width: 100%;
  max-height: 50%;
  position: relative;
}

.video {
  max-height: 1670px;
  width: 100%;
  height: auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
