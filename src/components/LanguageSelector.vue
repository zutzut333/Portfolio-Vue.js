<template>
<div id="containerLanguagesBubble">
  <div id="PYC" @mouseover="addBorder('PYC')" @mouseleave="removeBorder('PYC')" @click="changeLanguage('PYC')"><h2 class="centerText">PYC</h2></div>

  <div id="FR"  @mouseover="addBorder('FR')"  @mouseleave="removeBorder('FR')"  @click="changeLanguage('FR')"><h2 class="centerText">FR</h2></div>

  <div id="ENG" @mouseover="addBorder('ENG')" @mouseleave="removeBorder('ENG')" @click="changeLanguage('ENG')"><h2 class="centerText">ENG</h2></div>
</div>
</template>

<script>

export default {
  name: "LanguageSelector",

  methods: {
    addBorder(overChoose) {
      document.getElementById(overChoose).style.border = "30px solid rgba(255, 255, 255, .8)";
      document.getElementById(overChoose).style.color = "white";
    },
    removeBorder(overChoose) {
      document.getElementById(overChoose).style.border = "none";
      document.getElementById(overChoose).style.color = "cornsilk";
    },
    changeLanguage(SelectedLanguage) {
      console.log(SelectedLanguage);
        this.$store.commit('setLanguage', SelectedLanguage );
    }
  }
}

</script>

<style scoped>

#containerLanguagesBubble{
  position: absolute;
  top: 5%;
  width: 25%;
  height: 35%;
  left: 5%;
  z-index: 5;
}

#FR {
  position: relative;
  top: 3%;
  left: 35%;
  background-color: black;
  border-radius:100%;
  width: 25%;
  height: 30%;
  border: none;
  padding: 10px;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  color: cornsilk;
  cursor:  pointer;
}

#ENG {
  position: relative;
  top: 5%;
  left: -5%;
  background-color: black;
  border-radius:100%;
  width: 25%;
  height: 30%;
  border: none;
  padding: 10px;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  color: cornsilk;
  cursor:  pointer;
}

#PYC {
  position: relative;
  top: 0;
  left: 0;
  background-color: black;
  border-radius:100%;
  width: 25%;
  height: 30%;
  border: none;
  padding: 10px;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  color: cornsilk;
  cursor:  pointer;
}

.centerText{
  position: relative;
  top: 5%;
}

</style>