import { OrbitControls } from "@react-three/drei"

export default function Experience()
{
    return <group> 
        <OrbitControls/>
        <mesh>
            <boxGeometry />
            <meshBasicMaterial color="red"/>
        </mesh>
    </group>
}

// Render updates for free
// Camera positioning and intrinsics for free