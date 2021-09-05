<template>
  <div id="app">
    <Home/>
  </div>
</template>

<style>
#app {
  font-family: Century Gothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<script>
import Home from "@/views/Home";
export default {
  components: {Home}
}
</script>