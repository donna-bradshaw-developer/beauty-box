<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span> | </span> 
      <router-link to="/about">About</router-link>
      <span> | </span> 
      <router-link to="/order">Order</router-link>
    </div>
    <img src="./assets/images/box2.png">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/styles.scss"
</style>
