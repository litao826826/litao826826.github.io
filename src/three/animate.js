import * as THREE from "three"
import renderermoduel from "./renderer"
import camera from "./camera"
import scene from "./scene"
import control from "./control"


function animate() {
    renderermoduel.renderer.render(scene, camera)
    renderermoduel.css2drenderer.render(scene, camera)
    requestAnimationFrame(animate)
    control.update()
}
export default animate