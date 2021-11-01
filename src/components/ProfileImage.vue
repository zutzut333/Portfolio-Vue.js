<template>
  <div id="containerImage">
      <img id="ProfileImage" src="../assets/ProfileImage.jpg" alt="Profile Image">
  </div>
</template>

<script>
export default {
  name: "ProfileImage",
}
</script>

<style scoped>

@media (min-width:640px) {
  #ProfileImage{
    position: relative;
    top: 0;
    border-radius: 100%;
    width: 100%;
  }
}

@media (min-width: 641px) and (max-width: 1007px){
  #ProfileImage{

  }
}

@media (max-width:1008px){
  #ProfileImage{

  }
}

#containerImage{
  position: absolute;
  width: 20%;
  height: 20%;
  top: 20%;
  left: 10%;

}

</style>