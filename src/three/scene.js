import * as THREE from "three"
let scene = new THREE.Scene()
let cubetextureloder = new THREE.CubeTextureLoader().setPath('./texture/')
let cubtexture = cubetextureloder.load(['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'])
scene.background = cubtexture
scene.environment = cubtexture
export default scene