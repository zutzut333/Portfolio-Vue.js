<template>
  <div class="home">

    <section id="First-section">
      <div class="home-present">
        <Presentation/>
      </div>
    </section>

    <section >
      <div id="Transition">

      </div>
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

#Transition{
  background-image: url("../assets/texture/upWave.svg");
  position: absolute;
  top: 65%;
  height: 35%;
  width: 100%;
  left: 0;
}

#First-section{

  position: absolute;
  top: -4%;
  left: 0;
  width: 100%;
  height: 94%;


  background-color: #cfc5de;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2384759d' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}


</style>