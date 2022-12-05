import * as THREE from "three"
import renderermodule from "./renderer"
import camera from "./camera"
import scene from "./scene"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
let control = new OrbitControls(camera, renderermodule.renderer.domElement)
control.enableDamping = true
export default control