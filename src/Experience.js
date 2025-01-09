import { useThree, extend } from "@react-three/fiber"
import { OrbitControls } from "three/examples/jsm/Addons.js"

extend({OrbitControls})

export default function Experience()
{
    const {camera, gl} = useThree()
    return <group> 
        <orbitControls args={[camera, gl.domElement]}/>
        <mesh>
            <boxGeometry />
            <meshBasicMaterial color="red"/>
        </mesh>
    </group>
}

// Render updates for free
// Camera positioning and intrinsics for free