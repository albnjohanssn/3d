import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

export default function Cube() {
  const cubeRef = useRef(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.02;
      cubeRef.current.rotation.y += 0.02;
    }
  });
  return (
    <mesh ref={cubeRef} rotation={[0, 1, 1]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color='silver' metalness={0.3} roughness={0.5} />
    </mesh>
  );
}
