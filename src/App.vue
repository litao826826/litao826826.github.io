<template>
  <div id="app">
    <nav>
     
      <router-link to="/about">About</router-link> |<router-link to="/">Home</router-link> 
    </nav>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  height: 100%;
}
</style>
