import { OrbitControls } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function Experience()
{
    const colorMap = useLoader(TextureLoader, '/textures/snowflake.jpg')

    const count = 5000
    const positions = new Float32Array(count * 3)

    for(let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10
    }

    return <group> 
        <OrbitControls/>
        <points>
            <bufferGeometry >
                <bufferAttribute 
                attach="attributes-position"
                count = {count}
                itemSize = {3}
                array={positions}
                />
            </bufferGeometry>
            <pointsMaterial size={0.1} sizeAttenuation={true} map={colorMap} />
        </points>
    </group>
}