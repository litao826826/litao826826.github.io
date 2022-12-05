import * as THREE from "three"

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)
camera.position.set(350, 150, 350)
export default camera