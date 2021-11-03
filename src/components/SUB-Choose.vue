<template>

  <div v-if="SideChoose ===  'up'" class="boxText">
    <div id="upText">

      <ul v-if="language === 'ENG'">
        <li>GitHub <br>
          <a style="color: yellow" href="https://github.com/zutzut333">https://github.com/zutzut333</a>
        </li>
        <li>My CV <br>
          <a style="color: yellow" href="https://drive.google.com/file/d/1UkPBYznOG-6cOUPLJ_QL6KalJrlIG5vw/view?usp=sharing">https://drive.google.com/file/d/1UkPBYznOG-6cOUPLJ_QL6KalJrlIG5vw/view?usp=sharing</a>
        </li>
      </ul>

      <ul v-if="language === 'PYC'">
        <li>GitHub <br>
          <a style="color: yellow" href="https://github.com/zutzut333">https://github.com/zutzut333</a></li>
        <li> My CV <br>
          <a style="color: yellow" href="https://drive.google.com/file/d/1EU4JrvD14iY2FTNTtl_8zleYejpGTA0L/view?usp=sharing">https://drive.google.com/file/d/1EU4JrvD14iY2FTNTtl_8zleYejpGTA0L/view?usp=sharing</a>
        </li>
      </ul>

      <ul v-if="language === 'FR'">
        <li>GitHub <br>
        <a style="color: yellow" href="https://github.com/zutzut333">https://github.com/zutzut333</a></li>
        <li>  My CV <br>
          <a style="color: yellow" href="https://drive.google.com/file/d/1mhEa0hzGcYUUBrysPEkSpaBJODRJE2vj/view?usp=sharing">https://drive.google.com/file/d/1mhEa0hzGcYUUBrysPEkSpaBJODRJE2vj/view?usp=sharing</a>
        </li>
      </ul>

    </div>
  </div>

  <div v-else-if="SideChoose ===  'down'" class="boxText">
    <div id="downText">

      <ul v-if="language === 'ENG'">
        <li>E-mail     Jam@mole.ch</li>
        <li>Phone      +41 79 868 39 58</li>
        <li>Linkedin:  <br>
          <a style="color: yellow" href="https://www.linkedin.com/in/jean-b%C3%B6sch-210ba0220/">https://www.linkedin.com/in/jean-b%C3%B6sch-210ba0220/</a>
        </li>
      </ul>

      <ul v-if="language === 'PYC'">
        <li>электронная почта     Jam@mole.ch</li>
        <li>номер телефона       +41 79 868 39 58</li>
        <li>Linkedin:  <br>
          <a style="color: yellow" href="https://www.linkedin.com/in/jean-b%C3%B6sch-210ba0220/">https://www.linkedin.com/in/jean-b%C3%B6sch-210ba0220/</a>
        </li>
      </ul>

      <ul v-if="language === 'FR'">
        <li>E-mail     Jam@mole.ch</li>
        <li>Numéro de Téléphone   +41 79 868 39 58</li>
        <li>Linkedin:  <br>
          <a style="color: yellow" href="https://www.linkedin.com/in/jean-b%C3%B6sch-210ba0220/">https://www.linkedin.com/in/jean-b%C3%B6sch-210ba0220/</a>
        </li>
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