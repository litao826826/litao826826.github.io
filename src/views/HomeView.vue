<template>
  <div class="home">
  <scene></scene>
  <BigScreen></BigScreen>
  </div>
</template>

<script>
import scene from '../components/Scene.vue'
import BigScreen from '../components/BigScreen.vue'

// @ is an alias to /src


export default {
  components:  {scene,BigScreen} ,
 
}
</script>
