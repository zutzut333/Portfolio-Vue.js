<template>
  <div class="Presentation">

    <div id="questions">
      <table id="who" @mouseover="SelectedTheme = 'who'">
        <tr v-if="language === 'ENG'">Who am I ? </tr>
        <tr v-if="language === 'PYC'">Кто я ? </tr>
        <tr v-if="language === 'FR'"> Qui suis-je ? </tr>
      </table>
      <table id="what" @mouseover="SelectedTheme = 'what'">
        <tr v-if="language === 'ENG'">What I know ? </tr>
        <tr v-if="language === 'PYC'">Что я знаю ? </tr>
        <tr v-if="language === 'FR'"> Qui sais-je ? </tr>
      </table>
      <table id="why" @mouseover="SelectedTheme = 'why'">
        <tr v-if="language === 'ENG'">Why me ? </tr>
        <tr v-if="language === 'PYC'">Почему я ? </tr>
        <tr v-if="language === 'FR'"> Pourquoi moi ? </tr>
      </table>

    </div>



    <div id="bubble">
      <SUBBubble :Selected="SelectedTheme"/>
    </div>
  </div>
</template>

<script>


import SUBBubble from "@/components/SUB-bubble";
export default {
  name: 'Presentation',
  components: {SUBBubble},
  data() {
    return {
      SelectedTheme: 'undefined',

    }
  },
  computed: {
    language(){
      return this.$store.state.language ;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media (min-width:640px) {
  #who{

  }
}

@media (min-width: 641px) and (max-width: 1007px){
  #who{

  }
}

@media (max-width:1008px){
  #who{

  }
}

#bubble{
  position: absolute;
  top: 7%;
  right: 0;
  height: 80%;
  width: 40%;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}

#questions {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 40%;
  height: 80%;
  color: cornsilk;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: bold;
}

#who {
  position: relative;
  top: 10%;
  width: 55%;
  left: 60%;
  font-size: xxx-large;
  border-radius: 100px;
  transition-duration: 0.6s;
}

#who:hover {
  background-color: black;
  color: white;
}

#what {
  position: relative;
  top: 22%;
  width: 60%;
  left: 30%;
  font-size: xxx-large;
  border-radius: 100px;
  transition-duration: 0.6s;
}

#what:hover {
  background-color: black;
  color: white;
}

#why {
  position: relative;
  top: 34%;
  width: 40%;
  left: 10%;
  font-size: xxx-large;
  border-radius: 100px;
  transition-duration: 0.6s;
  z-index:2
}

#why:hover {
  background-color: black;
  color: white;
}

</style>
