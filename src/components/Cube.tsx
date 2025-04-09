import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function InteractiveCube() {
  const cubeRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  // Animate the cube by rotating it on every frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.02;
      cubeRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh
      ref={cubeRef}
      rotation={[0, 1, 1]}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial
        color={hovered ? 'green' : 'silver'}
        metalness={0.3}
        roughness={0.5}
      />
    </mesh>
  );
}
