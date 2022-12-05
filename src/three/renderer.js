import * as THREE from "three"
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer"
import camera from "./camera"
let renderer = new THREE.WebGL1Renderer({
    antialias: true,
    logarithmicDepthBuffer: true
})
renderer.setClearColor(0xffffff)
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.5 //曝光度
renderer.setSize(window.innerWidth, window.innerHeight)
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.updateProjectionMatrix()
    renderer.setPixelRatio(window.devicePixelRatio)
})
let css2drenderer = new CSS2DRenderer()
css2drenderer.setSize(window.innerWidth, window.innerHeight)
css2drenderer.domElement.style.top = "0px"
css2drenderer.domElement.style.left = "0px"
css2drenderer.domElement.style.position = "absolute"
css2drenderer.domElement.style.pointerEvents = "none"
export default { renderer, css2drenderer }