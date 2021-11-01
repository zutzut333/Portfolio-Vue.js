<template>
<div id="greyBox" style="display: flex; flex-direction: row; justify-content:space-between; position: relative;">
  <div style="width:2rem;height:2rem; background-color:#06A8FF; border-radius:9999px; position: absolute; transform: translate(10rem); transition-duration: 2s;"></div>
  <div id="FR" style="width:2rem; height:2rem;">FR</div>
  <div id="ENG" style="width:2rem; height:2rem;">ENG</div>
  <div id="PYC" style="width:2rem; height:2rem;">PYC</div>
</div>
</template>

<script>
export default {
  name: "LanguageSelector"
}
</script>

<style scoped>

#greyBox{
  background-color: lightgrey;
  position: relative;
  top: 5%;
  width: 10%;
  height: 3%;
  left: 5%;
  border-style: solid;
  border-color: black;
  border-radius: 9999px;
}

#FR {
  background-color: gray;
  border-radius:100%;
}

#ENG {
  background-color: gray;
  border-radius:100%;
}

#PYC {
  background-color: gray;
  border-radius:100%;
}

</style>