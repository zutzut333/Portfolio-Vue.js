<template>
<div id="parallelogram">
  <div id="ChooseBox">
  <div id="upChoose" @mouseover="SideChoose = 'up'; changeColorToRed()">
    <h1 class="BoxText" v-if="language === 'ENG'">More Information ?</h1>
    <h1 class="BoxText" v-if="language === 'PYC'">Больше информации ?</h1>
    <h1 class="BoxText" v-if="language === 'FR'"> Plus d'information ?</h1>
  </div>
  <div id="downChoose" @mouseover="SideChoose = 'down' ; changeColorToBlue()">
    <h1 class="BoxText" v-if="language === 'ENG'">Contact</h1>
    <h1 class="BoxText" v-if="language === 'PYC'">Контакт</h1>
    <h1 class="BoxText" v-if="language === 'FR'"> Contact</h1>
  </div>
  </div>
  <SUBChoose :SideChoose="SideChoose" />
</div>
</template>

<script>
import SUBChoose from "@/components/SUB-Choose";
export default {
  name: "InformationBox",
  components: {SUBChoose},
  data() {
    return {
      SideChoose: 'undefined',
    }
  },
  methods: {
    changeColorToRed() {
      document.getElementById("parallelogram").style.background = "linear-gradient(to top left, rgb(70,50,3), rgb(104,10,218))"
    },
    changeColorToBlue() {
      document.getElementById("parallelogram").style.background = "linear-gradient(to bottom left, rgb(70,50,3), rgb(104,10,218))"
    }
  },
  computed: {
    language() {
      return this.$store.state.language;
    }
  }
}
</script>

<style scoped>

#parallelogram{
  position:relative;
  top: -10%;
  left: 39%;
  width: 45%;
  height: 50%;
  background: rgba(0, 0, 0, .7);
  -webkit-transform:skew(-30deg);
  -moz-transform:skew(-30deg);
  -o-transform:skew(-30deg);
  tranform:skew(-30deg);
  border-radius: 10%;
}

#ChooseBox{
 position: relative;
  width: 40%;
  height: 100%;
}

#upChoose{
  position: relative;
  height: 50%;
  color: cornsilk;
  border: 1px solid #2c3e50;
  border-top-left-radius: 22%;
}

#downChoose{
  position: relative;
  height: 49%;
  color: cornsilk;
  border: 1px solid #2c3e50;
  border-bottom-left-radius: 21%;
}

.BoxText{
  position: relative;
  top: 30%;
}


</style>