<template>
<div id="parallelogram">
  <div id="ChooseBox">
  <div id="upChoose" @mouseover="SideChoose = 'up'; changeColorToRed()">
    <h1 class="BoxText">More Information ?</h1>
  </div>
  <div id="downChoose" @mouseover="SideChoose = 'down' ; changeColorToBlue()">
    <h1 class="BoxText">Contact</h1>
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
  methods:{
    changeColorToRed(){
      document.getElementById("parallelogram").style.background = "linear-gradient(to bottom left, rgb(250, 1, 154), rgb(56, 34, 173))"
    },
    changeColorToBlue(){
      document.getElementById("parallelogram").style.background = "linear-gradient(to bottom right, rgb(250, 1, 154), rgb(56, 34, 173))"
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
  background:black;
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