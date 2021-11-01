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
    top: 15%;
    border-radius: 100%;
    width: 60%;
    border-color: #e2bf00;
    border-style: solid;
    border-width: 4px;
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
  width: 30%;
  height: 50%;
  top: 15%;
  left: 5%;
  background-color: black;
  border-radius: 100%;
}

</style>