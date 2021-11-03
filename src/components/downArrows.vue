
<template>
  <div @click="scrollDown" id="containerArrows">
  <div class="arrow">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
</template>

<script>
export default {
  name: "downArrows",

  methods: {
    scrollDown() {
      window.scrollBy(0, 1000);
    }
  }
}
</script>

<style scoped>

#containerArrows{
  position: relative;
  top: 45%;
  width: 6%;
  height: 20%;
  left: 50%;
  z-index: 6;
}

.arrow{
  position: relative;
  top: 40%;
  left: 43%;
  transform: translate(-50%,-50%);
  width:8%
}
.arrow span{
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid #06A8FF;
  border-right: 5px solid #06A8FF;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
}
.arrow span:nth-child(2){
  animation-delay: -0.2s;
}
.arrow span:nth-child(3){
  animation-delay: -0.4s;
}
@keyframes animate {
  0%{
    opacity: 0;
    transform: rotate(45deg) translate(-20px,-20px);
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: rotate(45deg) translate(20px,20px);
  }
}

</style>
