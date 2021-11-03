<template>

    <div v-if="Selected === 'undefined'" id="bubDepartPlace"/>

     <div v-else-if="Selected ===  'who'" id="whoBubble">
       <div style="font-size: xxx-large; font-weight: bold">Hi !</div>
       <table>
         <tr  class="whoText" v-if="language === 'ENG'"> &nbsp; I am Jean Bösch, <br>an 18-year-old <br> front-end developer from Switzerland </tr>
         <tr  class="whoText" v-else-if="language === 'FR'"> &nbsp; je m'appelle <br> Jean Bösch, un étudiant développeur <br> front-end de 18ans</tr>
         <tr  class="whoText" v-else-if="language === 'PYC'"> &nbsp; меня зовут Жан Бёш, я 18-летний студент, занимающийся фронтенд-разработкой. </tr>
       </table>
    </div>

    <div v-else-if="Selected ===  'what'" id="whatBubble">
      <table style="height: 100%; width: 100%">
         <tr class="whatText" v-if="language === 'ENG'"> I have front-end <br> skills in vue.js <br> and PHP / SQL <br>   bases </tr>
         <tr class="whatText" v-if="language === 'FR'">  J'ai des <br>compétence <br>front-end en vue.js <br>et des bases en PHP/SQL </tr>
         <tr class="whatText" v-if="language === 'PYC'"> У меня есть<br> фронтенд навыки работы с vue.js и базами на <br>PHP / SQL. </tr>
      </table>
    </div>

    <div v-else-if="Selected ===  'why'" id="whyBubble">
      <tr class="whyText" v-if="language === 'ENG'"> Recruiting me <br> for  an internship means having a passionate and competent <br>developer for<br>  your projects </tr>
      <tr class="whyText" v-if="language === 'FR'"> Me recruter en <br> stage c'est avoir un développeur passionné<br> et compétant pour vos projet </tr>
      <tr class="whyText" v-if="language === 'PYC'"> Наем меня на стажировку означает наличие увлеченного и компетентного разработчика для <br> ваших проектов.</tr>
    </div>

</template>

<script>
export default {
  name: "SUB-bubble",
  props: {
    Selected: String,
  },
  computed: {
    language(){
      return this.$store.state.language ;
    }
  }
}

</script>
<style scoped>

#bubDepartPlace{
  border-radius:100%;
  background: linear-gradient(to bottom left, rgb(250, 1, 154), rgb(56, 34, 173));
  width: 30%;
  height: 30%;
  position: relative;
  top: 40%;
  left: 10%;
}

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
.whoText{
  line-height: 120%;
  word-spacing: 5px;
  font-size: 33px;
  font-family: Arial,serif ;
  position: relative;
  top: 10%;
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

.whatText{
  line-height: 120%;
  word-spacing: 5px;
  font-size: 33px;
  font-family: Arial,serif ;
  position: relative;
  top: 25px;
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

.whyText{
  line-height: 120%;
  word-spacing: 5px;
  font-size: 30px;
  font-family: Arial,serif ;
  position: relative;
  top: 25px;
}

</style>