"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Mesh } from "three";

interface MeshComponentProps {
  rotate: boolean;
}

function MeshComponent({ rotate }: MeshComponentProps) {
  const fileUrl = "/3d/robot/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
      if (rotate) {
          mesh.current.rotation.y += 0.01;
      }
      mesh.current.rotation.y += 0.03;
  });

  return (
    <mesh ref={mesh} scale={[0.5, 0.5, 0.5]}> {/* Adjust scale as needed */}
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function RobotThreeD() {
  const [rotateModel, setRotateModel] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const rotate = window.scrollY > 0;
          setRotateModel(rotate);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  return (
    <div className='full-screen-container'>
      <Canvas className='full-screen-canvas' camera={{ position: [-1.5, 1.5, 5], near: 0.1, far: 100 }}>
        <PerspectiveCamera makeDefault position={[-1.5, 1.5, 5]} near={0.1} far={100} />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={!rotateModel} enableDamping dampingFactor={0.2} rotateSpeed={0.5} />
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
        <directionalLight position={[-10, -10, -10]} intensity={0.8} />
        <MeshComponent rotate={rotateModel} />
      </Canvas>
    </div>
  );
}