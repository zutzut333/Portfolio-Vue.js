<template>
<div id="parallelogram">
  <div id="ChooseBox">
  <h1 id="upChoose" @mouseover="SideChoose = 'up'">More Information ?</h1>
  <h1 id="downChoose" @mouseover="SideChoose = 'down'">Contact</h1>
  </div>
  <SUBChoose :Selected="SideChoose" />
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
  top: 30%;
  color: cornsilk;
}

#downChoose{
  position: relative;
  top: 35%;
  color: cornsilk;
}


</style>