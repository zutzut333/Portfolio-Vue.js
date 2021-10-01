<template>

     <div v-if="Selected ===  'who'" id="whoBubble">
       <div style="font-size: xxx-large; font-weight: bold">Hi !</div>
       <div id="whoText"> &nbsp; I am Jean Bösch, <br>an 18-year-old  front-end<br>developer from Switzerland </div>
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
  border-radius: 78% 22% 46% 54% / 21% 67% 33% 79% ;
  background: linear-gradient(to bottom left, rgb(250, 1, 154), rgb(56, 34, 173));
  width: 60%;
  height: 70%;
  position: relative;
  top: 8%;
  left: 15%;
  transition-duration: 2s;
  z-index: 40;
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
  border-radius: 23% 77% 15% 85% / 70% 19% 81% 30% ;
  background: linear-gradient(to bottom left, rgb(250, 1, 154), rgb(56, 34, 173));
  width: 60%;
  height: 70%;
  position: relative;
  left: 20%;
  top: 30%;
  transition-duration: 2s;
  z-index: 40;
}

#whyBubble{
  border-radius: 50% 50% 66% 34% / 20% 31% 69% 80% ;
  background: linear-gradient(to bottom left, rgb(250, 1, 154), rgb(56, 34, 173));
  width: 60%;
  height: 70%;
  position: relative;
  left: 0;
  top: 15%;
  transition-duration: 2s;
  z-index: 40;
}

</style>