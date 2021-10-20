<template>
<div id="ProfileImage"/>
</template>

<script>
export default {
  name: "ProfileImage"
}
</script>

<style scoped>

@media (min-width:640px) {
  #ProfileImage{

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


#ProfileImage{
  border-radius: 100%;
  width: 20%;
  height:20%;
  background-image: url("../assets/Spike.gif");
}


</style>