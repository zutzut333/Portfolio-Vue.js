<template>

  <div id="arrowAnim">
    <div class="arrowSliding">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay1">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay2">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay3">
      <div class="arrow"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "downArrows"
}
</script>

<style scoped>

#arrowAnim {
  width: 5%;
  height: 45%;
  position: absolute;
  left: 50%;
  bottom: 10%;

}

.arrow {
  width: 100%;
  height: 100%;
  border: 15px solid;
  border-color: black transparent transparent black;
  transform: rotate(225deg);
}


.arrowSliding {
  position: absolute;
  -webkit-animation: slide 4s linear infinite;
  animation: slide 4s linear infinite;
}

.delay1 {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.delay2 {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.delay3 {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}


@-webkit-keyframes slide {
  0% { opacity:0; transform: translateY(-30px); }
  20% { opacity:1; transform: translateY(-18px); }
  80% { opacity:1; transform: translateY(30px); }
  100% { opacity:0; transform: translateY(18px); }
}
@keyframes slide {
  0% { opacity:0; transform: translateY(-30px); }
  20% { opacity:1; transform: translateY(-18px); }
  80% { opacity:1; transform: translateY(18px); }
  100% { opacity:0; transform: translateY(30px); }
}

</style>
