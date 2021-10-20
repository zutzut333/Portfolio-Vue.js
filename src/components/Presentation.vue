<template>
  <div class="Presentation">
    <div id="questions">
      <h1 id="who" @mouseover="SelectedTheme = 'who'">Who am I ?</h1>
      <h1 id="what" @mouseover="SelectedTheme = 'what'">What I know ?</h1>
      <h1 id="why" @mouseover="SelectedTheme = 'why'">Why me ?</h1>
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
      SelectedTheme: undefined,

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media (min-width:640px) {
  #who{
    top: 10%;
    width: 55%;
  }
}

@media (min-width: 641px) and (max-width: 1007px){
  #what{

  }
}

@media (max-width:1008px){
  #why{

  }
}

#bubble{
  position: absolute;
  right: 0;
  height: 80%;
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
}

#who {
  position: relative;
  top: 10%;
  width: 40%;
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

#bubble {
  position: absolute;


}

</style>
