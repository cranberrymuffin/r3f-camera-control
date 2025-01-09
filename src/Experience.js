import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from 'react'
import { OrbitControls } from "three/examples/jsm/Addons.js"

extend({OrbitControls})

export default function Experience()
{
    const {camera, gl} = useThree()
    const cubeRef = useRef()

    return <> 
        <orbitControls args={[camera, gl.domElement]}/>
        <mesh ref={cubeRef}>
            <boxGeometry />
            <meshBasicMaterial color="red"/>
        </mesh>
    </>
}