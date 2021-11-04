<template>

  <div v-if="screen.width >= 1000" id="app">
    <Home/>
  </div>
  <div v-else-if="screen.height < 1000">
    
    we are sorry but the site isn't ready for your resolution

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

/* Works on Chrome, Edge, and Safari */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: darkslategray;
}

::-webkit-scrollbar-thumb {
  background-color: darkslateblue;
  border-radius: 20px;
}

</style>

<script>
import Home from "@/views/Home";
export default {
  components: {Home},

}
</script>