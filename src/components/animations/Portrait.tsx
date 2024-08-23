import * as THREE from 'three';

import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';

export const Portrait = () => {
    const ref = useRef<THREE.Mesh>(null!);
    useFrame(() => {
        
    })
    const frontTexture = useLoader(THREE.TextureLoader, `magic_the_gathering_card/magic_card_front.jpg`)
    const backTexture = useLoader(THREE.TextureLoader, `magic_the_gathering_card/magic_card_back.webp`)


    return (
        <mesh ref={ref}>
            <boxGeometry args={[3, 5, 0.05]} />
            {/* Sides */}
            <meshStandardMaterial attach="material-0" color="black" />
            <meshStandardMaterial attach="material-1" color="black" />
            <meshStandardMaterial attach="material-2" color="black" />
            <meshStandardMaterial attach="material-3" color="black" />
            {/* Front */}
            <meshStandardMaterial attach="material-4" map={frontTexture} />
            {/* Back */}
            <meshStandardMaterial attach="material-5" map={backTexture} />
        </mesh >
    );
}