import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <color attach="background" args={["black"]} /> 
        <Experience />
    </Canvas>
)