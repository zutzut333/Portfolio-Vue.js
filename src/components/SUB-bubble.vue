<template>

     <div v-if="Selected ===  'who'" id="whoBubble">
       <H1 style="font-size: xxx-large; font-weight: bold">Hi !</H1>
       <div id="whoText"> &nbsp; I am Jean Bösch, <br>an 18-year-old  front-end<br>developer from Switzerland </div>
       <img id="imgWho" alt="ourson" src="../assets/ourson.jpg">
    </div>

    <div v-else-if="Selected ===  'what'" id="whatBubble">
      <div id="whatText"> &nbsp; I am Jean Bösch, <br>an 18-year-old  front-end<br>developer from Switzerland </div>
    </div>

    <div v-else-if="Selected ===  'why'" id="whyBubble">
    {{Selected}}
    </div>

</template>

<script>
export default {
  name: "SUB-bubble",
  props: {
    Selected: String,
  }
}

</script>

<style scoped>

#whoBubble{
border-radius: 100%;
  border-color: black;
  border-style: double;
  border-width: 10px;
  border-top-style: solid;
  background-color: rgba(255,255,255,0.45); ;
  width: 60%;
  height: 70%;
  position: relative;
  top: 8%;
  left: 15%;
  transition-duration: 1.5s;
}
#imgWho{
  border-radius: 100%;
  border-color: black;
  border-style: solid;
  border-width: 7px;
  width: 45%;
  height: 50%;
  position: relative;
  left: 22%;
  bottom: 30%;
}
#whoText{
  height: 60%;
  line-height: 120%;
  word-spacing: 5px;
  font-size: 33px;
  text-align: left;
  font-family: Arial,serif ;
  position: relative;
  left: 8%;
}

#whatBubble{
  border-radius: 100%;
  border-color: black;
  border-style: double;
  border-width: 10px;
  border-left-style: solid;
  background-color: rgba(255,255,255,0.45);
  width: 60%;
  height: 70%;
  position: relative;
  left: 20%;
  top: 30%;
  transition-duration: 1.5s;
}

#whyBubble{
  border-radius: 100%;
  border-color: black;
  border-style: double;
  border-width: 10px;
  border-bottom-style: solid;
  background-color: rgba(255,255,255,0.45); ;
  width: 60%;
  height: 70%;
  position: relative;
  left: 0;
  top: 15%;
  transition-duration: 1.5s;
}

</style>