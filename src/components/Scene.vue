<template>
    <div ref="container" class="lt">
        
    </div>
</template>

<script>
import scene from "../three/scene"
import camera from "../three/camera"
import renderermoduel from "../three/renderer"
import animate from "../three/animate"
import *as THREE from "three"
import createmesh from "../three/CreateMesh"
import light from "../three/light"

scene.add(camera)
// scene.add(new THREE.AxesHelper(5))
scene.add(light)
createmesh()
console.log(scene);
export default {
    data() {
        return {
            
        };
    },

    mounted() {
        this.$refs.container.appendChild(renderermoduel.renderer.domElement)
        this.$refs.container.appendChild(renderermoduel.css2drenderer.domElement)
        animate()
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.lt{
    z-index: 10;
    width: 100vw;
    height: 100vh;
    top:0;
    left: 0;
    position: absolute;
}


</style>