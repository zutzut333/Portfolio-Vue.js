<template>
  <div class="home">

    <section id="First-section">
      <div class="home-present">
        <Presentation/>
      </div>
    </section>

    <section id="Second-section">

    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from '@/components/Presentation.vue'

export default {
  name: 'Home',
  components: {
    Presentation
  }
}
</script>

<style>

#Second-section{
  background-color: dimgrey;
  position: absolute;
  top: 85%;
  height: 15%;
  width: 100%;
  left: 0;
}

#First-section{

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85%;

  background-image: url("../assets/BK1.jpg");
  background-size: cover;
}

</style>