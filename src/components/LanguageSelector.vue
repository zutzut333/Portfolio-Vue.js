<template>
<div id="containerLanguagesBubble">
  <div @mouseover="addBorder('FR')" @mouseleave="removeBorder('FR')" @mouseclick="changeLanguage('FR')" id="FR"><h2 class="centerText">FR</h2></div>
  <div @mouseover="addBorder('ENG')" id="ENG"><h2 class="centerText">ENG</h2></div>
  <div @mouseover="addBorder('PYC')" id="PYC"><h2 class="centerText">PYC</h2></div>
</div>
</template>

<script>

export default {
  name: "LanguageSelector",

  methods: {
    addBorder(overChoose) {
      document.getElementById(overChoose).style.border = " 1px solid white;";
    },
    removeBorder(overChoose) {
      document.getElementById(overChoose).style.border = " none;";
    },
    changeLanguage(overChoose) {

    }
  }
}

</script>

<style scoped>

#containerLanguagesBubble{
  position: absolute;
  top: 5%;
  width: 15%;
  height: 20%;
  left: 5%;
}

#FR {
  position: relative;
  top: 5%;
  left: 19%;
  background-color: black;
  border-radius:100%;
  width:30%;
  height:40%
}

#ENG {
  position: relative;
  top: 5%;
  left: -5%;
  background-color: black;
  border-radius:100%;
  width:30%;
  height:40%
}

#PYC {
  position: relative;
  top: -45%;
  left: 42%;
  background-color: black;
  border-radius:100%;
  width:30%;
  height:40%
}

.centerText{
  position: relative;
  top: 30%;
  color: slategray;
}

</style>