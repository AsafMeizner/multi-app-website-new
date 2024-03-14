"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/3d/robot/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
    });
  
    return (
      <mesh ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    );
}

export function RobotThreeD() {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Canvas className='h-2xl w-2xl'>
          <MeshComponent />
        </Canvas>
      </div>
    );
  }