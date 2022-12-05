import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import scene from "../scene"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import Tag from "./Tag"
import eventHub from "../eventHub"
import gsap from "gsap"
import camera from "../camera"
export default function createcity() {
    let floor1group = new THREE.Group()
    let floor2group = new THREE.Group()
    let floor3group = new THREE.Group()
    let floor2Tags = []
    const gltfloader = new GLTFLoader()
    const dRACOLoader = new DRACOLoader()
    dRACOLoader.setDecoderPath('./draco copy/')
    gltfloader.setDRACOLoader(dRACOLoader)
    gltfloader.load('./floor2.glb', (gltf) => {

        gltf.scene.traverse((child) => {
            if (child.type == "Object3D" && child.children.length === 0) {
                // child.material.emissiveIntensity = 20
                let Object2Dcss = Tag(child)
                floor2Tags.push(Object2Dcss)
                Object2Dcss.visible = false
                floor2group.add(Object2Dcss)
                floor2group.add(gltf.scene)
            }
        })
        floor2group.visible = false;

        scene.add(floor2group)


    })
    gltfloader.load('./floor1.glb', (gltf) => {
        floor1group.add(gltf.scene)
        scene.add(floor1group)
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.emissiveIntensity = 20

            }
        })
        floor1group.visible = false

    })
    gltfloader.load('./wall.glb', (gltf) => {
        floor3group.add(gltf.scene)
        scene.add(floor3group)


    })

    function showfloor1() {
        floor1group.visible = true
    }

    function showfloor2() {
        floor2group.visible = true
        floor2Tags.forEach((item) => {
            item.visible = true
        })
    }

    function showfloor3() {
        floor3group.visible = true
    }

    function hiddenfloor1() {
        floor1group.visible = false
    }

    function hiddenfloor2() {
        floor2group.visible = false
        floor2Tags.forEach((item) => {
            item.visible = false
        })

    }

    function hiddenfloor3() {
        floor3group.visible = false
    }

    function initEvent() {
        eventHub.$on("showfloor1", () => {
            showfloor1()
            hiddenfloor2()
            hiddenfloor3()
            gsap.to(camera.position, {
                x: 100,
                z: 100,
                y: 300,
                ease: true,
                duration: 1.5
            })
        })
        eventHub.$on("showfloor2", () => {
            showfloor2()
            hiddenfloor1()
            hiddenfloor3()
            gsap.to(camera.position, {
                x: 100,
                z: 100,
                y: 300,
                ease: true,
                duration: 1.5
            })
        })
        eventHub.$on("showfloor3", () => {
            showfloor3()
            hiddenfloor1()
            hiddenfloor2()
            gsap.to(camera.position, {
                x: 100,
                z: 100,
                y: 300,
                ease: true,
                duration: 1.5
            })
        })
        eventHub.$on("showAll", () => {
            showfloor1()
            showfloor2()
            showfloor3()
            gsap.to(floor3group.position, {
                y: 200,
                duration: 1
            })
            gsap.to(floor2group.position, {
                y: 100,
                duration: 1,
                delay: 1
            })

        })
        eventHub.$on("hiddenAll", () => {
            gsap.to(floor2group.position, {
                y: 0,
                duration: 1
            })
            gsap.to(floor3group.position, {
                y: 0,
                duration: 1,
                delay: 1,
                onComplete: () => {
                    hiddenfloor1()
                    hiddenfloor2()
                }
            })
        })
    }
    initEvent()
    console.log(eventHub);
}