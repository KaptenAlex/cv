import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Portrait } from './Portrait';

export const CanvasOfMe = () => {
    return (
        <Canvas className='animation-container'>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <OrbitControls autoRotate/>
            <Portrait />
        </Canvas>
    );
}