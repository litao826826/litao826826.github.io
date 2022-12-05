import THREE from "three"
import scene from "../scene"
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer"
export default function Tag(child) {
    let Tag = document.createElement("div")
    Tag.className = "Tag"
    Tag.innerHTML = `
             <div class ="content">
             <h3>${child.name}</h3>
             <p>温度:28°</p>
             <p>湿度:50%</p>
             </div> 
    
    `
    let css2dobject = new CSS2DObject(Tag)
        // css2dobject.scale.set(0.1, 0.1, 0.1)
    console.log(css2dobject);
    css2dobject.position.copy(child.position)
    return css2dobject
}