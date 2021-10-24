<template>
<div>
  <div v-if="SideChoose === 'undefined'" id="allBlack"/>

  <div v-else-if="SideChoose ===  'up'" id="upChoose">
    <div style="font-size: xxx-large; font-weight: bold">Hi !</div>
    <div id="whoText"> &nbsp; I am Jean Bösch, <br>an 18-year-old  front-end<br>developer from Switzerland </div>
  </div>

  <div v-else-if="SideChoose ===  'down'" id="downChoose">
    <div id="whatText"> &nbsp; I am Jean Bösch, <br>an 18-year-old  front-end<br>developer from Switzerland </div>
  </div>


</div>
</template>

<script>
export default {
  name: "SUB-Choose",
  props: {
    SideChoose: String,
  }
}
</script>

<style scoped>

#allBlack{

}

</style>