<template>

  <div v-if="SideChoose ===  'up'" class="boxText">
    <div id="upText">
   <ul>
     <li>GitHub     //git</li>
     <li>---------</li>
     <li>---------</li>
   </ul>
    </div>
  </div>

  <div v-else-if="SideChoose ===  'down'" class="boxText">
    <div id="downText">
      <ul>
        <li>E-mail     Jam@mole.ch</li>
        <li>Phone       +41 79 868 39 58</li>
        <li>---------</li>
      </ul> </div>
  </div>

</template>

<script>
export default {
  name: "SUB-Choose",
  props: {
    SideChoose: String,
  },

}
</script>

<style scoped>

.boxText{
  position: relative;
  width: 60%;
  height: 20%;
  left: 40%;
  top: -100%;
}

#upText{
height: 100%;
}

#downText{
height: 100%;
}


</style>