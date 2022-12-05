import * as THREE from "three"
import scene from "./scene"
const light = new THREE.DirectionalLight(0xffffff)
light.position.set(0, 300, 0)
export default light