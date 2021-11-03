<template>

  <div v-if="SideChoose ===  'up'" class="boxText">
    <div id="upText">

      <ul v-if="language === 'ENG'">
        <li>GitHub     //git</li>
        <li>----ENG-----</li>
        <li>---------</li>
      </ul>

      <ul v-if="language === 'PYC'">
        <li>GitHub     //git</li>
        <li>------PYC---</li>
        <li>---------</li>
      </ul>

      <ul v-if="language === 'FR'">
        <li>GitHub     //git</li>
        <li>----FR-----</li>
        <li>---------</li>
      </ul>

    </div>
  </div>

  <div v-else-if="SideChoose ===  'down'" class="boxText">
    <div id="downText">

      <ul v-if="language === 'ENG'">
        <li>E-mail     Jam@mole.ch</li>
        <li>Phone      +41 79 868 39 58</li>
        <li>---------</li>
      </ul>

      <ul v-if="language === 'PYC'">
        <li>электронная почта     Jam@mole.ch</li>
        <li>номер телефона       +41 79 868 39 58</li>
        <li>---------</li>
      </ul>

      <ul v-if="language === 'FR'">
        <li>E-mail     Jam@mole.ch</li>
        <li>Numéro de Téléphone   +41 79 868 39 58</li>
        <li>---------</li>
      </ul>

    </div>
  </div>

</template>

<script>
export default {
  name: "SUB-Choose",
  props: {
    SideChoose: String,
  },
  computed: {
    language() {
      return this.$store.state.language;
    }
  }
}
</script>

<style scoped>

.boxText{
  position: relative;
  width: 60%;
  height: 20%;
  left: 40%;
  top: -100%;
  color: aliceblue;
}

#upText{
height: 100%;
}

#downText{
height: 100%;
}


</style>