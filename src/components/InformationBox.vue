<template>
<div id="parallelogram">
  <div id="ChooseBox">
  <h1 id="upChoose" @mouseover="SideChoose = 'up'">More Information ?</h1>
  <h1 id="downChoose" @mouseover="SideChoose = 'down'">Contact</h1>
  </div>
  <div id="ChossedSide">
    <SUB-Choose :Selected="SideChoose"/>
  </div>
</div>
</template>

<script>
export default {
  name: "InformationBox"
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
  top: 20%;
  left: 20%;

}

</style>