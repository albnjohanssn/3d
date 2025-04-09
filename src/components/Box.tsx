'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';

export default function Box() {
  return (
    <div className='flex justify-center items-center max-h-full'>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 1, 2]} intensity={2.5} />
        <Cube />
      </Canvas>
    </div>
  );
}
