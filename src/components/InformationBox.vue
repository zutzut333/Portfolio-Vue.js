<template>
<div id="parallelogram">
  <div id="ChooseCircle">
  <h1 id="upChoose" @mouseover="SideChoose = 'up'">More Information ?</h1>
  <h1 id="downChoose" @mouseover="SideChoose = 'down'">Contact</h1>
  </div>
  <div id="bubble">
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
  top: -5%;
  left: 40%;
  width: 45%;
  height: 45%;
  background:darkred;
  -webkit-transform:skew(-30deg);
  -moz-transform:skew(-30deg);
  -o-transform:skew(-30deg);
  tranform:skew(-30deg);
  border-radius: 10%;
}

#ChooseCircle{
  border-radius: 50%;
  background-color: ;
}

</style>